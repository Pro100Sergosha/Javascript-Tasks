const prompt = require("prompt-sync")();

function simple() {
  let principal = Number(prompt("Enter the principal: "));
  let rate = parseFloat(prompt("Enter the rate of interest: "));
  let years = Number(prompt("Enter the number of years: "));
  const formula = principal * (1 + (rate / 100) * years);
  console.log(
    `After ${years} years at ${rate}%, the investment will be worth $${formula}.`
  );
}
simple();
