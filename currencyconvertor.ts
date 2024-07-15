import inquirer from "inquirer";

let conversion = {
    "pkr": {
        "usd" : 0.0036,
        "gbp" : 0.0037,
        "pkr" : 1
    },
    "gbp" : {
        "usd" : 1.21,
        "pkr" : 350,
        "gbp" : 1   
        },
        "usd":{
        "pkr" : 277.58,
        "gbp" : 0.83,
        "usd" : 1
        }
}
const answer: {
    from: "pkr" | "usd" | "gbp",
    to:   "pkr" | "usd" | "gbp",

    amount: number
} = await inquirer.prompt([
    {
        type : "list",
        name: "from",
        choices : ["pkr","usd","gbp"],
        message: "select your currency..?"
    },
    {
         type : "list",
        name: "to",
        choices : ["pkr","usd","gbp"],
        message: "select your currency"
    },
    {
         type : "number",
        name: "amount",
        message: "enter your conversion amount"
    }
])

    const{from,to,amount} = answer;
    if(from && to && amount){
        let result = conversion[from][to] * amount
        console.log('your conversion from ${from} to ${to} is ${result}')
    }
    else{
        console.log("invalid inputs")
    }