const prompt = require('prompt-sync')();

function sum1(num1, num2){
    num1 = Number(prompt('Enter first number: '))
    num2 = Number(prompt('Enter second number: '))
    return num1 + num2
}

sum2 = function(num1, num2){
    num1 = Number(prompt('Enter first number: '))
    num2 = Number(prompt('Enter second number: '))
    return num1 + num2
}

sum3 = (num1, num2) => {
    num1 = Number(prompt('Enter first number: '))
    num2 = Number(prompt('Enter second number: '))
    return num1 +num2
}

console.log(sum1())
console.log(sum2())
console.log(sum3())