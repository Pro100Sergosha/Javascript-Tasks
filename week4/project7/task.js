const prompt = require('prompt-sync')();

function madLibs(){
    noun = prompt('Enter a noun: ')
    verb = prompt('Enter a verb: ')
    adjective = prompt('Enter a adjective: ')
    adverb = prompt('Enter a adverb: ')
    console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That\'s hilarious!`)
}

madLibs()
