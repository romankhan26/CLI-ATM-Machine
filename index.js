#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = require("chalk");
var inquirer_1 = require("inquirer");
var myBalance = 10000;
var userID = "ROMAN KHAN";
var myPin = 2112006;
var userIDAnswer = await inquirer_1.default.prompt({
    name: "uID",
    message: chalk_1.default.bold.yellow.bgGray("Please Enter Your  user ID :"),
    type: "input",
});
var pinAnswer = await inquirer_1.default.prompt({
    name: "pin",
    message: chalk_1.default.bold.bgGray.yellow("Please Enter Your PIN Number :"),
    type: "number",
});
if (pinAnswer.pin === myPin && userIDAnswer.uID === userID) {
    console.log(chalk_1.default.bgGreen.white.bold("\n\tCORRECT PIN AND USER ID\t\n"));
    var operationAnswer = await inquirer_1.default.prompt({
        name: "operation",
        message: chalk_1.default.bold.blue("Please select the option :"),
        type: "list",
        choices: [
            chalk_1.default.bold.yellow("Deposit"),
            chalk_1.default.bold.yellow("Withdraw"),
            chalk_1.default.bold.yellow("CheckBalance"),
            chalk_1.default.bold.yellow("FastCash"),
        ],
    });
    if (operationAnswer.operation == chalk_1.default.bold.yellow("Deposit")) {
        var depositAnswer = await inquirer_1.default.prompt({
            name: "amount1",
            message: chalk_1.default.cyan("Please enter the amount to be Deposited:"),
            type: "number",
        });
        if (depositAnswer.amount1 > 0) {
            myBalance += depositAnswer.amount1;
            console.log(chalk_1.default.bold.green("\t\nYour new balance is: $".concat(myBalance, "\n\t")));
        }
        else {
            console.log(chalk_1.default.red.bold("Invalid amount. Please deposit a positive amount"));
        }
    }
    else if (operationAnswer.operation === chalk_1.default.bold.yellow("Withdraw")) {
        var withdrawAnswer = await inquirer_1.default.prompt({
            name: "amount2",
            message: chalk_1.default.cyan("Please enter the amount to be Withdrawn"),
            type: "number",
        });
        if (withdrawAnswer.amount2 > 0 && withdrawAnswer.amount2 < myBalance) {
            myBalance -= withdrawAnswer.amount2;
            console.log(chalk_1.default.green.bold("\t\nYour remaining balance is: $".concat(myBalance, "\n\t")));
        }
        else {
            console.log(chalk_1.default.red.bold("Transaction can not be completed due to insufficient funds. Please check your balance and try again."));
            console.log(chalk_1.default.yellow.bold("\t\nYour current balance is : $".concat(myBalance, "\n\t")));
        }
    }
    else if (operationAnswer.operation === chalk_1.default.bold.yellow("CheckBalance")) {
        console.log(chalk_1.default.bold.green.italic("\t\nYour current balance is: $".concat(myBalance, "\n\t")));
    }
    else if (operationAnswer.operation === chalk_1.default.bold.yellow("FastCash")) {
        var fastCashAnswer = await inquirer_1.default.prompt({
            name: "amount3",
            message: chalk_1.default.cyan("Please select the preset amount to be FastCash:"),
            type: "list",
            choices: [
                chalk_1.default.bold.yellow("1000"),
                chalk_1.default.bold.yellow("2000"),
                chalk_1.default.bold.yellow("3000"),
                chalk_1.default.bold.yellow("4000"),
                chalk_1.default.bold.yellow("5000"),
                chalk_1.default.bold.yellow("6000"),
                chalk_1.default.bold.yellow("7000"),
                chalk_1.default.bold.yellow("8000"),
                chalk_1.default.bold.yellow("9000"),
                chalk_1.default.bold.yellow("10000"),
            ],
        });
        if (fastCashAnswer.amount3 > 0) {
            myBalance -= fastCashAnswer.amount3;
            console.log(chalk_1.default.green.bold("\t\nYour new balance is: $".concat(myBalance, "\n\t")));
        }
        else {
            console.log(chalk_1.default.red.bold("Invalid amount. Please select from the preset options."));
        }
    }
}
else if (pinAnswer.pin == undefined || userIDAnswer.uID === undefined) {
    console.log(chalk_1.default.bold.red("\t\nPlease Enter PIN and User ID. It's mandatory\n\t"));
}
else {
    console.log(chalk_1.default.red.bold.italic("\t\nInvalid PIN or user ID\n\t"));
}
