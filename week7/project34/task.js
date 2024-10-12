const prompt = require("prompt-sync")();

function drivingAge() {
  const age = Number(prompt("What is your age? "));
  if (age >= 16) {
    console.log("You are old enough to legally drive.");
    return;
  }
  console.log("You are not old enough to legally drive.");
}

drivingAge();
