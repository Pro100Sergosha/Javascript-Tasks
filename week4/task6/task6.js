const prompt = require('prompt-sync')();

function  sayHello(number){
    number = prompt('Enter number: ')
    for (let i = 0; i<=number; i++){
        console.log('Hello')
    }
}

sayHello()