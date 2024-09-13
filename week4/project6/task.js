const prompt = require('prompt-sync')();

function convert(word){
    return word.replace(':(', '🙁').replace(':)', '🙂')
}


function main(){
    word = prompt('')
    console.log(convert(word))

}

main()