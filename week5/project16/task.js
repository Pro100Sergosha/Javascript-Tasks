const prompt = require("prompt-sync")();

function pizza() {
  let peoples = Number(prompt("How many people? "));
  let pizza = Number(prompt("How many pizzas do yo have? "));
  let pieces = Number(prompt("How many pieces has one pizza? "));
  console.log(`${peoples} people with ${pizza} pizzas`);
  let totalPieces = pizza * pieces;
  console.log(
    `Each person gets ${Math.floor(totalPieces / peoples)} pieces of pizza.`
  );
  console.log(`There are ${totalPieces%peoples} leftover pieces.`)
}

pizza();
