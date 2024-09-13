const prompt = require('prompt-sync')();

function sayHello(name){
    name = prompt('What\'s your name? ')
    console.log(`Hello, ${name}, nice to meet you!`)
}

sayHello()