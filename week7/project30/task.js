const prompt = require("prompt-sync")();

function convert(time) {
  const [hours, minutes] = time.split(":").map(Number);
  const timeInFloat = hours + minutes / 60;
  return timeInFloat;
}

function main() {
  const input = convert(prompt("What time is it? "));
  if (input >= 7 && input <= 8) {
    console.log("Breakfast time");
  } else if (input >= 12 && input <= 13) {
    console.log("Lunch Time");
  } else if (input >= 18 && input <= 19) {
    console.log("Dinner time");
  }
}

main();
