#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
let myBalance = 10000;
let userID = "ROMAN KHAN";
let myPin = 2112006;
let userIDAnswer = await inquirer.prompt({
    name: "uID",
    message: chalk.bold.yellow.bgGray("Please Enter Your  user ID :"),
    type: "input",
});
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: chalk.bold.bgGray.yellow("Please Enter Your PIN Number :"),
    type: "number",
});
if (pinAnswer.pin === myPin && userIDAnswer.uID === userID) {
    console.log(chalk.bgGreen.white.bold("\n\tCORRECT PIN AND USER ID\t\n"));
    let operationAnswer = await inquirer.prompt({
        name: "operation",
        message: chalk.bold.blue("Please select the option :"),
        type: "list",
        choices: [
            chalk.bold.yellow("Deposit"),
            chalk.bold.yellow("Withdraw"),
            chalk.bold.yellow("CheckBalance"),
            chalk.bold.yellow("FastCash"),
        ],
    });
    if (operationAnswer.operation == chalk.bold.yellow("Deposit")) {
        let depositAnswer = await inquirer.prompt({
            name: "amount1",
            message: chalk.cyan("Please enter the amount to be Deposited:"),
            type: "number",
        });
        if (depositAnswer.amount1 > 0) {
            myBalance += depositAnswer.amount1;
            console.log(chalk.bold.green(`\t\nYour new balance is: $${myBalance}\n\t`));
        }
        else {
            console.log(chalk.red.bold("Invalid amount. Please deposit a positive amount"));
        }
    }
    else if (operationAnswer.operation === chalk.bold.yellow("Withdraw")) {
        let withdrawAnswer = await inquirer.prompt({
            name: "amount2",
            message: chalk.cyan("Please enter the amount to be Withdrawn"),
            type: "number",
        });
        if (withdrawAnswer.amount2 > 0 && withdrawAnswer.amount2 < myBalance) {
            myBalance -= withdrawAnswer.amount2;
            console.log(chalk.green.bold(`\t\nYour remaining balance is: $${myBalance}\n\t`));
        }
        else {
            console.log(chalk.red.bold("Transaction can not be completed due to insufficient funds. Please check your balance and try again."));
            console.log(chalk.yellow.bold(`\t\nYour current balance is : $${myBalance}\n\t`));
        }
    }
    else if (operationAnswer.operation === chalk.bold.yellow("CheckBalance")) {
        console.log(chalk.bold.green.italic(`\t\nYour current balance is: $${myBalance}\n\t`));
    }
    else if (operationAnswer.operation === chalk.bold.yellow("FastCash")) {
        let fastCashAnswer = await inquirer.prompt({
            name: "amount3",
            message: chalk.cyan("Please select the preset amount to be FastCash:"),
            type: "list",
            choices: [
                chalk.bold.yellow("1000"),
                chalk.bold.yellow("2000"),
                chalk.bold.yellow("3000"),
                chalk.bold.yellow("4000"),
                chalk.bold.yellow("5000"),
                chalk.bold.yellow("6000"),
                chalk.bold.yellow("7000"),
                chalk.bold.yellow("8000"),
                chalk.bold.yellow("9000"),
                chalk.bold.yellow("10000"),
            ],
        });
        if (fastCashAnswer.amount3 > 0) {
            myBalance -= fastCashAnswer.amount3;
            console.log(chalk.green.bold(`\t\nYour new balance is: $${myBalance}\n\t`));
        }
        else {
            console.log(chalk.red.bold("Invalid amount. Please select from the preset options."));
        }
    }
}
else if (pinAnswer.pin == undefined || userIDAnswer.uID === undefined) {
    console.log(chalk.bold.red("\t\nPlease Enter PIN and User ID. It's mandatory\n\t"));
}
else {
    console.log(chalk.red.bold.italic("\t\nInvalid PIN or user ID\n\t"));
}
