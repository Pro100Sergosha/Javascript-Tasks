const prompt = require('prompt-sync')();
const userInput = prompt('Enter a password: ')

if (userInput.includes('pass')){
    console.log('Welcome')

}
else{
    console.log('wrong pass')
}