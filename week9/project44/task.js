const prompt = require("prompt-sync")();

function countMonthsUntilPaidOff(balance, apr, monthlyPayment) {
  // Calculate the number of months required to pay off the balance using a single expression
  const months =
    -Math.log(1 - (balance * (apr / 100 / 365)) / monthlyPayment) /
    Math.log(1 + apr / 100 / 365);

  // Check if calculation is valid
  if (isNaN(months) || !isFinite(months) || months < 0) {
    return "Unable to calculate: please check your input values.";
  }

  return Math.ceil(months); // Round up to the next full month
}

// Get user input and convert to numbers
const balance = parseFloat(prompt("What is your balance? "));
const apr = parseFloat(prompt("What is the APR on the card (as a percent)? "));
const monthlyPayment = parseFloat(
  prompt("What is the monthly payment you can make? ")
);

// Calculate and display the number of months to pay off the card
const months = countMonthsUntilPaidOff(balance, apr, monthlyPayment);
if (typeof months === "string") {
  console.log(months); // Display error message if inputs are invalid
} else {
  console.log(`It will take you ${months} months to pay off this card.`);
}
