'reach 0.1';    //indicates that this is a REACH program

const [ isFinger, ZEROF, ONEF ,TWOF, THREEF, FOURF, FIVEF] = makeEnum(6)  //define enumerations for the fingers that may be played
const [ isOutcome, F_WINS, DRAW, P_WINS] = makeEnum(3)
const [ isGuess, ZERO, ONE ,TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, TEN] = makeEnum(11)

// define the function that computes the winner of the game
const winner = (fingerFaufau, fingerPaupau, guessFaufau, guessPaupau) => {
    const totalFinger = fingerFaufau + fingerPaupau
    if (guessFaufau == guessPaupau) {
        const myoutcome = DRAW
        return myoutcome
    }

    else if (totalFinger == guessFaufau) {
        const myoutcome = F_WINS
        return myoutcome
    }
    
    else if (totalFinger == guessPaupau) {
        const myoutcome = P_WINS
        return myoutcome
    }

    else {
        const myoutcome = DRAW
        return myoutcome
    }
}

//test cases as verification assrtions
assert(winner(ZEROF, ONEF, ZERO, ONE) == P_WINS)
assert(winner(ONEF, ZEROF, ONE, ZERO) == F_WINS)
assert(winner(ZEROF, ONEF, ZERO, TWO) == DRAW)
assert(winner(ONEF, ONEF, TWO, TWO) == DRAW)

//assert for all combinations
//no matter what values are provided, winner will always provide a valid outcome
forall(UInt, fingerFaufau =>
    forall(UInt, fingerPaupau =>
        forall(UInt, guessFaufau =>
            forall(UInt, guessPaupau =>
                assert(isOutcome(winner(fingerFaufau, fingerPaupau, guessFaufau, guessPaupau)))))));

//assert for a draw
forall(UInt, fingerFaufau =>
    forall(UInt, fingerPaupau =>
        forall(UInt, (guess) =>
            assert(winner(fingerFaufau, fingerPaupau, guess, guess) == DRAW))))

//define a participant interact interface that will shared between 2 players
//In this case, provide 4 methods
const Player = {
    ...hasRandom,   //generate a random number to protect Faufau's fingers (the value of the first player). Adds 'hasRandom' to the interface that the backend expects the frontend to provide
    getFinger: Fun([], UInt),   //return number
    getGuess: Fun([UInt], UInt),    //receive and return number
    seeWinning: Fun([UInt], Null),  //receive number
    seeOutcome: Fun([UInt], Null),  //receive number
    informTimeout: Fun([], Null),   //is called when a timeout occurs
}
//main export from the progeram
export const main = Reach.App(() => {
    //  use this interface (will become participant interact interface) for both participants
    // 'interact' will be bound to an object with methods coreesponding to these
    // actions, which will connect to the frontend of the corresponding participants
    
    //specify a participant to this program (here is Faufau)
    //define Faufau's interface as the Player interface, plus an integer value called wager
    const Faufau = Participant('Faufau', {
        ...Player,
        wager: UInt,
        deadline: UInt,
    })
    //specify another participant to this program (here is Paupau)
    const Paupau = Participant('Paupau', {
        ...Player,
        acceptWager: Fun([UInt], Null), //a method that can look at the wager value
    })
    init(); //deployment of the Reach program, which allows the program to start doing things

    //define a helper function to inform each of the participants of the timeout by calling this new method
    const informTimeout = () => {   //define the function as an arrow expression
        each([Faufau, Paupau], () => {  //each of the participants perform a local step
            interact.informTimeout()    //they call the new "informTimeout" method
        })
    }

    Faufau.only(() => {
        const wager = declassify(interact.wager)    //declassify the wager for transmission
        const deadline = declassify(interact.deadline)  //declassify the deadline time delta
    })

    Faufau.publish(wager, deadline) //Faufau publish the deadline and wager
        .pay(wager) //Faufau pay the wager //transfer Faufau's amount as part of her publication
    commit()

    Paupau.only(() => {
        interact.acceptWager(wager) //Paupau accept the wager
    })
    Paupau.pay(wager)   //Paupau has pay the wager
        .timeout(relativeTime(deadline), () => closeTo(Faufau, informTimeout))

    var outcome = DRAW  //define the loop variable, "outcome"
    //line below states the invariant that the body of the loop does not change the balance in the contract account and that outcome is a valid outcome.
    invariant(balance() == 2 * wager && isOutcome(outcome)) 
    while (outcome == DRAW) {   //begins the loop with the condition that it continues as long as the outcome is a draw
        commit()    //commit the last transaction

        Faufau.only(() => { //states that this block of code is something that only Faufau perform
            // all of the constants are known only to Faufau
            /*const wager = declassify(interact.wager)    
            const deadline = declassify(interact.deadline) */ 
            const _fingerFaufau = interact.getFinger() // binds that value to the result of interacting with Faufau through the 'getFinger' method. Faufau compute her hand.
            const _guessFaufau = interact.getGuess(_fingerFaufau)
    
            //compute a commitment to the finger. It comes with a secret "salt" value that must be revealed later
            //The "salt" was generated by the "random" function inside of "hasRandom" and it's why we pass "interact" to this function
            const [_commitFaufau, _saltFaufau] = makeCommitment(interact, _fingerFaufau)    
            const commitFaufau = declassify(_commitFaufau)  //Faufau declassify the commitment
            const [_guessCommitFaufau, _guessSaltFaufau] = makeCommitment(interact, _guessFaufau)
            const guessCommitFaufau = declassify(_guessCommitFaufau)
    
            /*const fingerFaufau = declassify(_fingerFaufau)  //declassify the value because all information from frontend is secret until t is explicitly made public
              const guessFaufau = declassify(_guessFaufau)*/
        })
    
        // Line below has faufau publish them, and the next line has her include the wager fund in the publication
        Faufau.publish(commitFaufau)    //Faufau join the application by publishing the value to the consensus network, so it can be used to evaluate the outcome of the game. Once this happens, the code is in a "sonsensus step" where all participants act together. Faufau shares the wager amount with Paupau
            .timeout(relativeTime(deadline), () => closeTo(Paupau, informTimeout))
        commit()    //commit the state of the consensus network and return to "local step" where individual participants can act alone
        Faufau.publish(guessCommitFaufau)
            .timeout(relativeTime(deadline), () => closeTo(Paupau, informTimeout))
        commit()
    
        //states the knowledge assertion
        //second player does not know the values for first player, but first player does know the value
        unknowable(Paupau, Faufau(_fingerFaufau, _saltFaufau))
        unknowable(Paupau, Faufau(_guessFaufau, _guessSaltFaufau))
    
        Paupau.only(() => {
            const _fingerPaupau = interact.getFinger()
            const _guessPaupau = interact.getGuess(_fingerPaupau)
    
            const fingerPaupau = declassify(_fingerPaupau)
            const guessPaupau = declassify(_guessPaupau)
        })
    
        Paupau.publish(fingerPaupau)
            //if Paupau does not complete this action within a time delta of deadline, then the application transitions to the step given by the arrow
            //In this case, the timeout code is a call to "closeTo", which is a Reach standard library function that 
            //allows anyone to send a message and transfer all of the funds in the contract to Faufau, then call the given function afterwards.
            //That means that if Pauau fails to publish his finger, then Faufau will take her network tokens back
            .timeout(relativeTime(deadline), () => closeTo(Faufau, informTimeout))  //adds a timeout handler to Paupau's publication
        commit() // Faufau'finger is not yet public
        Paupau.publish(guessPaupau)
            .timeout(relativeTime(deadline), () => closeTo(Faufau, informTimeout))
        commit()
    
        // Faufau will declassify the secret information
        Faufau.only(() => {
            const saltFaufau = declassify(_saltFaufau)
            const fingerFaufau = declassify(_fingerFaufau)
            const guessSaltFaufau = declassify(_guessSaltFaufau)
            const guessFaufau = declassify(_guessFaufau)
        })
    
        Faufau.publish(saltFaufau, fingerFaufau)    //publish the values
            //Paupau will be able to claim all of the funds if Faufau doesn't participate
            .timeout(relativeTime(deadline), () => closeTo(Paupau, informTimeout))
        checkCommitment(commitFaufau, saltFaufau, fingerFaufau) //check that the published values match the original values
        commit()
    
        Faufau.publish(guessSaltFaufau, guessFaufau)
            .timeout(relativeTime(deadline), () => closeTo(Paupau, informTimeout))
        checkCommitment(guessCommitFaufau, guessSaltFaufau, guessFaufau)
        commit()
    
        Faufau.only(() => {
            const winningNum = fingerFaufau + fingerPaupau;
            interact.seeWinning(winningNum);
        })
    
        Faufau.publish(winningNum)
            .timeout(relativeTime(deadline), () => closeTo(Faufau, informTimeout))
        
        //update the "outcome" loop variable with the new value
        outcome = winner(fingerFaufau, fingerPaupau, guessFaufau, guessPaupau)
        continue    //continues the loop
    }
    
    //compute the amount given to each participants depending on the the outcome
    /*const [forFaufau, forPaupau] = 
    outcome == 0 ? [2, 0] :
    outcome == 2 ? [0, 2] :
                    [1, 1];*/
    assert(outcome == F_WINS || outcome == P_WINS)  //assert that the outcome is never draw
    // transfer the corresponding amounts
    //take place from the contract to the participants, not from the participants to each other, because all of the funds reside inside of the contract                
    transfer(2 * wager).to(outcome == F_WINS ? Faufau : Paupau)
    commit() //commit the state of the apllication and allows the participants to see the outcome and complete

    each([Faufau, Paupau], () => {  //this is a local step that each of the participants performs
        interact.seeOutcome(outcome);
    })
});

    
