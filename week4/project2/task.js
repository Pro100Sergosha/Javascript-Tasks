const prompt = require('prompt-sync')();

function countingNumbers(word){
    word = prompt('What is the input string? ')
    console.log(`${word} has ${word.length} characters.`)
}

countingNumbers()