const prompt = require("prompt-sync")();
const emoji = require("node-emoji");

console.log(emoji.emojify(prompt("Input: ")));
