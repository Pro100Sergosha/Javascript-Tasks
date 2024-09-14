let strings = [
  "ab",
  "hello",
  "world",
  "code",
  "js",
  "frontend",
  "react",
  "css",
  "dev",
  "project",
];

function capitalizeWords(array) {
  let newArray = [];
  for (let word of array) {
    let newWord = "";
    for (let ch of word) {
      if (newWord === "") {
        newWord += ch.toUpperCase();
      } else {
        newWord += ch;
      }
    }
    newArray.push(newWord);
  }
  return newArray;
}

console.log(capitalizeWords(strings));
