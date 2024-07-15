"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var conversion = {
    "pkr": {
        "usd": 0.0036,
        "gbp": 0.0037,
        "pkr": 1
    },
    "gbp": {
        "usd": 1.21,
        "pkr": 350,
        "gbp": 1
    },
    "usd": {
        "pkr": 277.58,
        "gbp": 0.83,
        "usd": 1
    }
};
var answer = await inquirer_1.default.prompt([
    {
        type: "list",
        name: "from",
        choices: ["pkr", "usd", "gbp"],
        message: "select your currency..?"
    },
    {
        type: "list",
        name: "to",
        choices: ["pkr", "usd", "gbp"],
        message: "select your currency"
    },
    {
        type: "number",
        name: "amount",
        message: "enter your conversion amount"
    }
]);
var from = answer.from, to = answer.to, amount = answer.amount;
if (from && to && amount) {
    var result = conversion[from][to] * amount;
    console.log('your conversion from ${from} to ${to} is ${result}');
}
else {
    console.log("invalid inputs");
}
