const prompt = require('prompt-sync')();

function sumDigits(){
    let number = prompt('Enter number: ');
    let sum = 0;
    for(let i = 0; i < number.length; i++){
        sum += Number(number[i])
    }
    return sum
}

console.log(sumDigits())