const prompt = require("prompt-sync")();

function sortedSentence() {
  let sentence = prompt("Enter your text: ").trim().split(" ");
  let sortedArray = [];
  for (let word of sentence) {
    if (!["the", "is", "and"].includes(word)) {
      sortedArray.push(word);
    }
  }
  return sortedArray.sort((a, b) => b - a);
}

console.log(sortedSentence());
