const prompt = require('prompt-sync')();
const userInput = prompt('Enter a number: ')

if (userInput < 0){
    console.log('Negative')
}
else if (userInput > 0) {
    console.log('Positive')
}
else{
    console.log('null')
}
