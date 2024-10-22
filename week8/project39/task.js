const prompt = require("prompt-sync")();

function numberToName() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let userInput = Number(prompt("Please enter the number of the month: "));
  console.log(`The name of the mongth is ${months[userInput - 1]}.`);
}

numberToName();
