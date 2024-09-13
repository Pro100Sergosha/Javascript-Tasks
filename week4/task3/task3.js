const prompt = require('prompt-sync')();
function sum(num1, num2){
    num1 = Number(prompt('Enter first number: '))
    num2 = Number(prompt('Enter second number: '))
    return num1 + num2
}

console.log(sum())