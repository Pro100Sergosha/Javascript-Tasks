const prompt = require("prompt-sync")();

function promptAge() {
  let age = Number(prompt("Enter your age: "));
  if (Number.isNaN(age)) {
    throw new Error("Invalid type!\nWrite integer");
  }
  return age;
}

function isAdult(age) {
  if (age >= 18) {
    return "You are adult";
  } else {
    return "You are not adult";
  }
}

try {
  const adult = isAdult(promptAge());
  console.log(adult);
} catch (error) {
  console.log(error);
}
