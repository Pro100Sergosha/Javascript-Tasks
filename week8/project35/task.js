const prompt = require("prompt-sync")();

function BAC() {
  let A = Number(prompt("Enter alchohol consumed: "));
  let W = Number(prompt("Enter your weight: "));
  let gender = prompt("Enter your gender(male/female): ");
  let hours = Number(
    prompt("Enter how many hours have passed since last drink: ")
  );
  if (gender == "male") {
    r = 0.73;
  } else if (gender === "female") {
    r = 0.66;
  }
  let formula = (A * 5.14) / (W * r) - 0.015 * hours;
  if (formula >= 0.08) {
    console.log(`Your BAC is ${formula}`);
    return "It is not legal for you to drive.";
  }
  console.log(`Your BAC is ${formula}`);
  return "It is legal for you to drive.";
}

console.log(BAC());
