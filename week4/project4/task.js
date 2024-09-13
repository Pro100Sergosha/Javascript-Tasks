const prompt = require('prompt-sync')();

function indoor(word){
    word = prompt('')
    return word.toLowerCase()
}

console.log(indoor())