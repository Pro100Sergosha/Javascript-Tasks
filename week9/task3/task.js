const prompt = require("prompt-sync")();

function divideTwoNums() {
  let num1 = Number(prompt("Enter first number: "));
  let num2 = Number(prompt("Enter second number: "));
  if (num1 > num2 && typeof num1 === "number" && typeof num2 === "number") {
    return num1 / num2;
  }
  throw new Error("One of the numbers is not a number!");
}

try {
  let divide = divideTwoNums();
  console.log(divide);
} catch (error) {
  console.log(error);
}
