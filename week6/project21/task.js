const prompt = require("prompt-sync")();

function convert() {
  let euros = parseFloat(prompt("How many euros are you exchanging? "));
  let rate = parseFloat(prompt("What is the exchange rate? "));
  const formula = (euros * rate) / 100;
  console.log(
    `${euros} euros at an exchange rate of ${rate} is ${formula.toFixed(
      2
    )} U.S. dollars.`
  );
}

convert();
