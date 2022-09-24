import {loadStdlib} from '@reach-sh/stdlib';    //import the REACH standard library loader
import * as backend from './build/index.main.mjs';  //import backend, which '../reach run' will produce
const stdlib = loadStdlib(process.env); //load the standard library dynamically based on the 'REACH_CONNECTOR_MODE' environment variable

const startingBalance = stdlib.parseCurrency(100);  //define a quantity of network token as the starting balance for wach test account

const accFaufau = await stdlib.newTestAccount(startingBalance); //create a test account with initial endowments for Faufau
const accPaupau = await stdlib.newTestAccount(startingBalance); //create a test account with initial endowments for Paupau

const fmt = (x) => stdlib.formatCurrency(x, 4)  //a function that display the currency amount with up to 4 decimal places
const getBalance = async(who) => fmt(await stdlib.balanceOf(who))   //a function that getting the balance of a participant and display it with up to 4 decimal places
const beforeFaufau = await getBalance(accFaufau)    //get the balance before the game starts for Faufau
const beforePaupau = await getBalance(accPaupau)

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
                console.log(`Paupau accepts the wager of ${fmt(amt)}.`);
            /*}*/
        },
    }),

])
//get the balance afterward
const afterFaufau = await getBalance(accFaufau);    
const afterPaupau = await getBalance(accPaupau);

console.log(`Faufau went from ${beforeFaufau} to ${afterFaufau}`)
console.log(`Paupau went from ${beforePaupau} to ${afterPaupau}`)
console.log(`________________________________________`)
