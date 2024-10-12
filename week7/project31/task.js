const prompt = require("prompt-sync")();

let arr = [];
for (let i = 0; i < 5; i++) {
  arr.push(Number(prompt("Enter a number: ")));
}
console.log(arr.reduce((num, sum) => sum + num, 0));
