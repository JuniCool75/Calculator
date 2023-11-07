import { sum } from "./sum.js";
import { sub } from "./sub.js";
import { mul } from "./mul.js";
import { div } from "./div.js";
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "num1",
        message: "Enter First Number",
    },
    {
        type: "number",
        name: "num2",
        message: "Enter Second Number",
    },
    {
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/"],
        message: "select operator",
    },
]);
let { num1, num2, operator } = answer;
if (num1 && num2 && operator) {
    let result;
    if (operator === "+") {
        let result = sum(answer.num1, answer.num2);
        console.log("result", result);
    }
    else if (operator === "+") {
        let result = sum(answer.num1, answer.num2);
        console.log("Result", result);
    }
    else if (operator === "-") {
        let result = sub(answer.num1, answer.num2);
        console.log("Result", result);
    }
    else if (operator === "*") {
        let result = mul(answer.num1, answer.num2);
        console.log("Result", result);
    }
    else if (operator === "/") {
        let result = div(answer.num1, answer.num2);
        console.log("Result", result);
    }
}
