const prompt = require("prompt-sync")();

function isAnagram() {
  const word1 = prompt(
    "Enter two strings and I'll tell you if they\nare anagrams:\nEnter the first string: "
  );
  const word2 = prompt("Enter the second string:");
  if (word1.length == word2.length) {
    let arr1 = word1.split("").sort().join("");
    let arr2 = word2.split("").sort().join("");
    if (arr1 === arr2) {
      console.log(`"${word1}" and "${word2}" are anagrams.`);
      return true;
    }
    console.log(`"${word1}" and "${word2}" are not anagrams.`);
    return false;
  }
}

console.log(isAnagram());
