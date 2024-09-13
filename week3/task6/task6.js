const prompt = require('prompt-sync')();
while (true){
    const question = prompt('Enter a number: ')
    if (question != 1){
        continue
    }
    else{
        console.log('Welcome')
        break
    }
    
}