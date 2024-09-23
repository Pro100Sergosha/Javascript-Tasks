const prompt = require("prompt-sync")();
const menu = {
  "Baja Taco": 4.25,
  Burrito: 7.5,
  Bowl: 8.5,
  Nachos: 11.0,
  Quesadilla: 8.5,
  "Super Burrito": 8.5,
  "Super Quesadilla": 9.5,
  Taco: 3.0,
  "Tortilla Salad": 8.0,
};

function felipeTaqueria(menu) {
  let sum = 0;
  while (true) {
    let item = prompt("Item: ");
    if (item === "") {
      console.log(`$${sum}`);
      return;
    }
    if (menu.hasOwnProperty(item)) {
      sum += Number(menu[item]);
    } else if (!menu.hasOwnProperty(item)) {
      console.log("Item not found");
    }
  }
}
felipeTaqueria(menu);
