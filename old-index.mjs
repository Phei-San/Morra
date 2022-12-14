import { loadStdlib, ask } from '@reach-sh/stdlib';    //import the REACH standard library loader, import 'ask' object 
import * as backend from './build/index.main.mjs';  //import backend, which '../reach run' will produce
const stdlib = loadStdlib(process.env); //load the standard library dynamically based on the 'REACH_CONNECTOR_MODE' environment variable

//the block below ask the question whether the user play as Faufau and 
//expect a "Yes" or "No" answer.
//ask.ask presents a prompt and colects a line of input until its argument
//does not error.
//ask.ask erro if it is not given "y" r "n"
const isFaufau = await ask.ask(
    `Are you Faufau?`,
    ask.yesno
)

const who = isFaufau? 'Faufau': 'Paupau'
console.log(`Starting Morra as ${who}`)

let acc = null
//the block below present the user with the choice of creating a new test account
//or inputting a secret to load an existing account
const createAcc = await ask.ask(
    `Would you like to create an account? (only possible on devnet)`,
    ask.yesno
)

if(createAcc) {
    acc = await stdlib.newTestAccount(stdlib.parseCurrency(1000))   //create the test account
}
else {
    const secret = await ask.ask(
        `What is your account secret?`,
        (x => x)
    )
    acc = await stdlib.newAccountFromSecret(secret) //load the existing account
}

let ctc = null
if(isFaufau) {  
    //the lines below allows Faufau to deploy the contract and print out the
    //public info that can be given to Paupau when it becomes available
    ctc = acc.contract(backend)
    ctc.getInfo().then((info) => {  //ctc.getInfo() can get the public information
        console.log(`The contract is deployed as = ${JSON.stringify(info)}`)
    })
}
else {
    //the lines below request, parse and process this info
    const info = await ask.ask(
        `Please paste the contract information:`,
        JSON.parse
    )
    ctc = acc.contract(backend, info)
}
/*
const startingBalance = stdlib.parseCurrency(100);  //define a quantity of network token as the starting balance for wach test account
const accFaufau = await stdlib.newTestAccount(startingBalance); //create a test account with initial endowments for Faufau
const accPaupau = await stdlib.newTestAccount(startingBalance); //create a test account with initial endowments for Paupau
*/
const fmt = (x) => stdlib.formatCurrency(x, 4)  //a function that display the currency amount with up to 4 decimal places
const getBalance = async(/*who*/) => fmt(await stdlib.balanceOf(/*who*/acc))   //a function that getting the balance of a participant and display it with up to 4 decimal places
/*
const beforeFaufau = await getBalance(accFaufau)    //get the balance before the game starts for Faufau
const beforePaupau = await getBalance(accPaupau)
*/
const before = await getBalance()
console.log(`Your balance is ${before}`)

const interact = {...stdlib.hasRandom}
//timeout handler
interact.informTimeout = () => {
    console.log(`There was a timeout.`)
    process.exit(1)
}
//request the wager amount or define the accpetWager method,
//depending on if we are Faufau or not
if(isFaufau) {
    const amt = await ask.ask(
        `How much do you want to wager?`,
        stdlib.parseCurrency
    )
    interact.wager = amt
    interact.deadline = {ETH: 100, ALGO: 100, CFX: 1000} [stdlib.connector]
}
else {
    interact.acceptWager = async (amt) => {
        const accepted = await ask.ask(
            `Do you accept the wager of ${fmt(amt)}?`,
            ask.yesno
        )
        if (!accepted) {
            process.exit(0)
        }
    }
}
/*
const FINGER = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five']
const FINGERS = {
    'Zero': 0, 'ZERO': 0, 'zero': 0, '0': 0,
    'One': 1, 'ONE': 1, 'one': 1, '1': 1,
    'Two': 2, 'TWO': 2, 'two': 2, '2': 2,
    'Three': 3, 'THREE': 3, 'three': 3, '3': 3, 
    'Four': 4, 'FOUR': 4, 'four': 4, '4': 4, 
    'Five': 5, 'FIVE': 5, 'five': 5, '5': 5, 
}
*/
const FINGER = [0, 1, 2, 3, 4, 5]
const GUESS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

interact.getFinger = async () => {
    const finger = await ask.ask(
        `How many fingers will you play?`,
        (x) => {
            const finger = FINGER[x]
            if ( finger == undefined ) {
                throw Error(`Not a valid finger ${finger}`)
            }
            return finger
        }
    )
    console.log(`You played ${FINGER[finger]}`)
    return finger
}

interact.getGuess = async () => {
    const guess = await ask.ask(
        `How many fingers will you guess?`,
        (x) => {
            const guess = GUESS[x]
            if ( guess == undefined ) {
                throw Error(`Not a valid guess ${guess}`)
            }
            return guess
        }
    )
    console.log(`You guessed ${GUESS[guess]}`)
    return guess
}

const OUTCOME = ['Faufau wins', 'Draw', 'Paupau wins']
interact.seeOutcome = async (outcome) => {
    console.log(`The outcome is ${OUTCOME[outcome]}`)
}

interact.seeWinning = async (winningNum) => {
    console.log(``)
    console.log(`Actual total fingers is ${winningNum}`);
    console.log(`________________________________________`)
    console.log(``)
}

const part = isFaufau? ctc.p.Faufau: ctc.p.Paupau
await part(interact)

const after = await getBalance()
console.log(`Your balance is now ${after}`)

ask.done()
/*
const ctcFaufau = accFaufau.contract(backend);  //Faufau deploy the application
const ctcPaupau = accPaupau.contract(backend, ctcFaufau.getInfo()); //Paupau attach to it

const FINGER = [0, 1, 2, 3, 4, 5]   //array to hold the values of fingers
const OUTCOME = ['Faufau wins', 'Draw', 'Paupau wins']  //array to hold the values of outcome
const GUESS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]    //array to hold the values of guess

const Player = (Who) => ({  //define a constructor for the Player implementation
    ...stdlib.hasRandom,    //allow each participant's Reach code to generate random numbers as necessary. Adds 'hasRandom' to the implementation that the frontend provides to the backend
    //implement the getFinger method
    getFinger: async () => {
        const finger = Math.floor(Math.random() * 6)
        console.log(`${Who} played ${FINGER[finger]}`);
        return finger;
    },
    //implement the getGuess method
    getGuess: async (finger) => {
        const guess = Math.floor(Math.random() * 6) + FINGER[finger]
        if (Math.random() <= 0.01) {
            for (let i = 0; i < 10; i++) {
                console.log(`${Who} get their sweet time sending it back...`)
                await stdlib.wait(1)
            }
        }
        console.log(`${Who} guessed the total is ${guess}`)
        return guess;
    },
    //implement the seeWinning method
    seeWinning: (winningNum) => {
        console.log(``)
        console.log(`Actual total fingers is ${winningNum}`);
        console.log(`________________________________________`)
        console.log(``)
    },
    //implement the seeOutcome method
    seeOutcome: (outcome) => {
        console.log(`${Who} saw outcome ${OUTCOME[outcome]}`);
    },
    informTimeout: () => {
        console.log(`${Who} observed a timeout`)
    },
})

await Promise.all([ //wait for the backend to complete
    //initialize a backend for Faufau
    ctcFaufau.p.Faufau({
        ...Player('Faufau'),    //instantiate the implementation once for Faufau. Is the ACTUAL OBJECT that will be bound to 'interact' in the Reach program. Splices the common 'Player' interface into Faufau's interface
        wager: stdlib.parseCurrency(5), //define  Faufau's wager as 5 units of the network token
        deadline: 10,   //Faufau specify a deadline of ten blocks
    }),
    //initialize a backend for Paupau
    ctcPaupau.p.Paupau({
        ...Player('Paupau'),    //instantiate the implementation once for Paupau. Is the ACTUAL OBJECT that will be bound to 'interact' in the Reach program
        //define 'acceptWager' function
        // redefine "acceptwager" as an asynchronous function, where half og the time it will take at least ten blocks on
        // netwrok by waiting for 10 units of time to pass.
        // 10 is the vlaue of deadline, so this will cause a timeout
        acceptWager: async (amt) => {
            /*if (Math.random() <= 0.5) {
                for (let i = 0; i < 10; i++) {
                    console.log(`Paupau takes his sweet time...`)
                    await stdlib.wait(1)
                }
            }
            else {*/
                //console.log(`Paupau accepts the wager of ${fmt(amt)}.`);
            /*}*/
/*        },
    }),

])
//get the balance afterward
const afterFaufau = await getBalance(accFaufau);    
const afterPaupau = await getBalance(accPaupau);

console.log(`Faufau went from ${beforeFaufau} to ${afterFaufau}`)
console.log(`Paupau went from ${beforePaupau} to ${afterPaupau}`)
console.log(`________________________________________`)
*/
