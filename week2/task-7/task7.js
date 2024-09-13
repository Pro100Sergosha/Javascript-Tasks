const prompt = require('prompt-sync')();
const userAge = prompt('Enter your age: ')

if (userAge > 18){
    console.log('You\'re adult')
}
else{
    console.log('You\'re minor')
}