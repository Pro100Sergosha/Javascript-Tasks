const prompt = require("prompt-sync")();

function multiState() {
  const orderAmount = Number(prompt("What is the order amount? $"));
  const state = prompt("What state do you live in? ");
  if (state == "Wisconsin") {
    const county = prompt("What county do you live in? ");
    if (county == "Dunn") {
      const tax = orderAmount * 0.004;
      const total = orderAmount + tax;
      console.log(`The tax is $${tax.toFixed(2)}.`);
      console.log(`The total is $${total.toFixed(2)}.`);
    } else if (county == "Eau Claire") {
      const tax = orderAmount * 0.005;
      const total = orderAmount + tax;
      console.log(`The tax is $${tax.toFixed(2)}.`);
      console.log(`The total is $${total.toFixed(2)}.`);
    }
  } else if (state == "Illinois") {
    console.log("The tax is 8%.");
    console.log(`The total is $${orderAmount + (orderAmount * 8) / 100}.`);
  } else {
    console.log(`The total is $${orderAmount.toFixed(2)}.`);
  }
}

multiState();
