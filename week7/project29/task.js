const prompt = require("prompt-sync")();

function calculator() {
  const input = prompt("Expression: ").split(" ");
  const num1 = Number(input[0]);
  const num2 = Number(input[2]);
  const y = input[1];
  if (y == "*") {
    console.log(num1 * num2);
  } else if (y == "/") {
    console.log((num1 / num2).toFixed(1));
  } else if (y == "-") {
    console.log(num1 - num2);
  } else if (y == "+") {
    console.log(num1 + num2);
  }
}

calculator();
