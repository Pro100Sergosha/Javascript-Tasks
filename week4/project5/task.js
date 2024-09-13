const prompt = require('prompt-sync')();

function playback(word){
    word = prompt('')
    newWord = ''
    for (let i = 0; i <= word.length-1; i++){
        if (word[i] == ' '){
            newWord += '.'
        }else{
            newWord += word[i]
        }
    }
    return newWord
}

console.log(playback())