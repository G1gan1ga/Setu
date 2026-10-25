const prompt = require("prompt-sync")();
let a=prompt("Enter a number: ")
let b=prompt("Enter another number: ")
let operation=prompt("Enter an operation (+,-,x,/,^): ")
function sum(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}
function subtract(a, b) {
    return a - b;
}
function power(a, b) {
    return Math.pow(a, b);
}

let c=Math.random();
if(c<0.1){
    if(operation=="+"){
        console.log(subtract(a, b));
    }
    else if(operation=="-"){
        console.log(divide(a, b));
    }
    else if(operation=="x"){
        console.log(sum(a, b));
    }
    else if(operation=="/"){
        console.log(power(a, b));
    }
    else if(operation=="^"){
        console.log(multiply(a, b));
    }
}
else
{
    if(operation=="+"){
        console.log(sum(a, b));
    }
    else if(operation=="x"){
        console.log(multiply(a, b));
    }
    else if(operation=="/"){
        console.log(divide(a, b));
    }
    else if(operation=="-"){
        console.log(subtract(a, b));
    }
    else if(operation=="^"){
        console.log(power(a, b));
    }
}