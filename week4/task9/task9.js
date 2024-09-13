const prompt = require('prompt-sync')();

function sumBs(number, str){
    number = prompt('Enter number: ')
    str = ''
    for (let i = 0; i<= number; i++){
        str += 'B'
    }
    return str
}

console.log(sumBs())