const prompt = require("prompt-sync")();

function printNumbers() {
  let input = Number(prompt("Enter number: "));
  for (let i = 1; i <= input; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

printNumbers();
