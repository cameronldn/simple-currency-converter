const input = require('sync-input');

console.log("Welcome to Currency Converter!");
const exchangeRates = {
    USD: 1,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75
};

for(let currency in exchangeRates) {
    console.log(`1 USD equals ${exchangeRates[currency]} ${currency}`);
}
mainInput();

function mainInput() {
    console.log("What do you want to do?");
    console.log("1. Convert Currency");
    console.log("2. Exit");
    const choice = Number(input());
    if(choice !== 1 && choice !== 2) {
        console.log("Unknown input");
        mainInput();
        return;
    }
    if(choice === 2) {
        console.log("Have a nice day!");
        process.exit();
    }
    convertInput();
}

function convertInput() {
    console.log("What do you want to convert?");
    const currencyFrom = input("From: ").toUpperCase();
    if(!(currencyFrom in exchangeRates)) {
        console.log("Unknown currency");
        convertInput();
        return;
    }
    const currencyTo = input("To: ").toUpperCase();
    if(!(currencyTo in exchangeRates)) {
        console.log("Unknown currency");
        convertInput();
        return;
    }
    const inputAmount = Number(input("Amount: "));
    if(isNaN(inputAmount)) {
        console.log("The amount has to be a number");
        convertInput();
        return;
    }
    if(inputAmount < 1) {
        console.log("The amount cannot be less than 1");
        convertInput();
        return;
    }
    const result = convert(currencyFrom, currencyTo, inputAmount);
    console.log(`Result: ${inputAmount} ${currencyFrom} equals ${result} ${currencyTo}`);
    mainInput();
}

function convert(from, to, amount) {
    let usdAmount =  (amount / exchangeRates[from]);
    return (usdAmount * exchangeRates[to]).toFixed(4);
}