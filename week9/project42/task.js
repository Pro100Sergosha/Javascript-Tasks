const prompt = require("prompt-sync")();

function isAnagram() {
  const word1 = prompt(
    "Enter two strings and I'll tell you if they\nare anagrams:\nEnter the first string: "
  );
  const word2 = prompt("Enter the second string:");
  if (word1.length == word2.length) {
    let arr1 = word1.split("");
    let arr2 = word2.split("");
    for (let ch in arr1) {
      if (arr1.sort()[ch] != arr2.sort()[ch]) {
        console.log(`"${word1}" and "${word2}" are not anagrams.`);
        return false;
      }
    }
    console.log(`"${word1}" and "${word2}" are anagrams.`);
    return true;
  }
}

console.log(isAnagram());
