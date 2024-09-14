const prompt = require("prompt-sync")();

function isPangram() {
  let word = prompt("Enter your word: ")
    .toLowerCase()
    .replace(/[^a-z]/g, "");
  let setWord = new Set(word);
  return setWord.size === 26;
}
console.log(isPangram());
