const prompt = require("prompt-sync")();

function TemperatureConverter(temperature, convertTo) {
  if (convertTo == "C") {
    const formula = ((temperature - 32) * 5) / 9;
    return `The temperature in Celsius is ${formula}.`;
  } else if (convertTo == "F") {
    const formula = (temperature * 9) / 5 + 32;
    return `The temperature in Fahrenheit is ${formula}.`;
  }
}

let choice = prompt(
  "Press C to convert from Fahrenheit to Celsius.\n\
Press F to convert from Celsius to Fahrenheit.\n\
Your choice: "
);
let temperature = Number(prompt("Please enter the temperature: "));
console.log(TemperatureConverter(temperature, choice));
