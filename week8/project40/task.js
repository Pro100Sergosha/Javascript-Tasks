const prompt = require("prompt-sync")();

function comparingNumbers() {
  let arr = [];
  const firstNum = Number(prompt("Enter the first number: "));
  const secondNum = Number(prompt("Enter the second number: "));
  const thirdNum = Number(prompt("Enter the third number: "));
  arr.push(firstNum);
  arr.push(secondNum);
  arr.push(thirdNum);
  console.log(`The largest number is ${arr.sort()[2]}`);
}

comparingNumbers();
