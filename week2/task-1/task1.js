const prompt = require('prompt-sync')();
const userInput = prompt('Write a number: ');


console.log(userInput % 2 === 0 ? `Number ${userInput} is Even` : `Number ${userInput} is Odd`)