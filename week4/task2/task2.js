const prompt = require('prompt-sync')();

function greet(name){
    name = prompt('Enter your name: ')
    console.log(`Hello ${name}!`)
}

greet()