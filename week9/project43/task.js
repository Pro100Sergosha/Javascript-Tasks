const prompt = require("prompt-sync")();

function passwordValidator(password) {
  if (password.length < 8 && !isNaN(password)) {
    return `The password ${password} is a very weak password.`;
  } else if (password.length < 8 && isNaN(password)) {
    return `The password ${password} is a weak password.`;
  } else if (
    /\d/.test(password) &&
    /[a-zA-Z]/.test(password) &&
    password.length > 8 &&
    !/[^a-zA-Z0-9\s]/.test(password)
  ) {
    return `The password ${password} is a strong password.`;
  } else if (
    /\d/.test(password) &&
    /[a-zA-Z]/.test(password) &&
    password.length > 8 &&
    /[^a-zA-Z0-9\s]/.test(password)
  ) {
    return `The password ${password} is a very strong password.`;
  }
}

console.log(passwordValidator(prompt("Enter your password: ")));
