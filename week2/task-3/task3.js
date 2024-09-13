const prompt = require('prompt-sync')();
const firstNum = prompt('Enter first number: ')
const secondNum = prompt('Enter second number: ')

if (firstNum % secondNum == 0){
    console.log('იყოფა')
}
else{
    console.log('არ იყოფა')
}