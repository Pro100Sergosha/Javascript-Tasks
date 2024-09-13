const prompt = require('prompt-sync')();
const userInput = prompt('Enter something: ')

if (userInput.trim() == ''){
    console.log('Empty')
}
else{
    console.log('Not empty')
}