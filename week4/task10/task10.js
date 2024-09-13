const prompt = require('prompt-sync')();

function sumAllDigits(start, stop){
    start = Number(prompt('Enter start number: '))
    stop = Number(prompt('Enter last number: '))
    sum = 0
    for (let i = start; i<=stop; i++){
        sum += i
    }
    return sum
}

console.log(sumAllDigits())