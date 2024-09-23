const prompt = require("prompt-sync")();

function selfCheckout() {
  let item1 = Number(prompt("Enter the price of item 1: "));
  let quantity1 = Number(prompt("Enter the quantity of item 1: "));
  let item2 = Number(prompt("Enter the price of item 2: "));
  let quantity2 = Number(prompt("Enter the quantity of item 2: "));
  let item3 = Number(prompt("Enter the price of item 3: "));
  let quantity3 = Number(prompt("Enter the quantity of item 3: "));
  const subtotal = item1 * quantity1 + item2 * quantity2 + item3 * quantity3;
  const tax = subtotal * 0.055;
  const total = subtotal + tax;
  console.log(`Subtotal: \$${subtotal.toFixed(2)}`);
  console.log(`Tax: \$${tax}`);
  console.log(`Total: \$${total}`);
}

selfCheckout();
