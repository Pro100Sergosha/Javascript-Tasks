const prompt = require('prompt-sync')();
function isPolidrome(word1, word2){
    word1 = prompt('Enter first word: ').split('').sort().join('')
    word2 = prompt('Enter second word: ').split('').sort().join('')
    
    if (word1 === word2){
        return true
    }
    else{
        return false
        
    }
}

console.log(isPolidrome())