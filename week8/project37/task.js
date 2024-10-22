const prompt = require("prompt-sync")();

function BMICalculator() {
  let weight = Number(prompt("Enter your weight: "));
  let height = Number(prompt("Enter your height: "));
  let formula = ((weight / height ** 2) * 703).toFixed(1);
  if (formula >= 18.5 && formula <= 25) {
    console.log(`Your BMI is ${formula}.`);
    console.log("You are within the ideal weight range.");
  } else if (formula < 18.5) {
    console.log(`Your BMI is ${formula}.`);
    console.log("You are underweight. You should see your doctor.");
  } else if (formula > 25) {
    console.log(`Your BMI is ${formula}.`);
    console.log("You are overweight. You should see your doctor.");
  }
}

BMICalculator();
