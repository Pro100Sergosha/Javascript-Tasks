const prompt = require("prompt-sync")();

function taxCalculator() {
  const input = parseFloat(prompt("What is the order amount? "));
  const state = prompt("What is the state? ");
  if (state === "WI") {
    let tax = input * 0.055;
    console.log(`The subtotal is $${input}`);
    console.log(`The tax is $${tax}`);
    console.log(`The total is $${tax + input}`);
    return;
  }
  console.log(`The total is $${input.toFixed(2)}`);
}

taxCalculator();
