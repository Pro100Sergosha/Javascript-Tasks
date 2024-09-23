const prompt = require("prompt-sync")();

function countPaint() {
  const gallon = 350;
  let length = Number(prompt("Enter length in feet: "));
  let height = Number(prompt("Enter height in feet: "));
  let paint = Math.ceil((length * height) / gallon);
  console.log(
    `You\'ll need ${paint} gallons of paint to cover ${
      length * height
    } square feet.`
  );
}

countPaint();
