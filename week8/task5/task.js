const prompt = require("prompt-sync")();

let response = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Number(prompt("Enter your age: ")) >= 18) {
      resolve("You are adult");
    } else {
      reject("You are not adult");
    }
  }, 3000);
});

console.log(
  response.then((data) => console.log(data)).catch((data) => console.log(data))
);
