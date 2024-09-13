const prompt = require('prompt-sync')();

function calculateArea(height, width){
    height = Number(prompt('Enter height: '))
    width = Number(prompt('Enter width: '))
    return height * width
}

console.log(calculateArea())