const prompt = require("prompt-sync")();

function passwordValidator() {
  const password = "abc@123";
  while (true) {
    const input = prompt("What is your password? ");
    if (input !== password) {
      console.log("I don't know you.");
      continue;
    }
    console.log("Welcome!");
    break;
  }
}

passwordValidator();
