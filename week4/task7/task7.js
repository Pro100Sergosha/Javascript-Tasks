const prompt = require('prompt-sync')();

function celsiusToFarenheit(celsius){
    celsius = prompt('Enter tempreture in celsius: ')
    return (+celsius * 9/5) + 32
}

console.log(celsiusToFarenheit())