const prompt = require("prompt-sync")();

let sentence = prompt("Enter your text: ").split(" ");

console.log(sentence.reverse());
