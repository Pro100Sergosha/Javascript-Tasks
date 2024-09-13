const prompt = require('prompt-sync')();

function quotes(word){
    word = prompt('What is the quote? ')
    question = prompt('Who said it? ')
    console.log(`${question} says, \"${word}\"`)
}
quotes()