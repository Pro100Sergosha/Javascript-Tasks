const prompt = require("prompt-sync")();

let input = prompt("Enter your nickname: ");
let response = fetch(`https://api.github.com/users/${input}`);
response.then((data) => data.json()).then((data) => console.log(data));
