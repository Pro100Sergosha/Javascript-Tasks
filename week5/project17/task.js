const prompt = require("prompt-sync")();

function groceryList() {
  let list = {};

  while (true) {
    let item = prompt("");
    if (item === "") {
      for (let i of Object.entries(list)) {
        console.log(`${i[1]} ${i[0].toUpperCase()}`);
      }
      return;
    }

    if (list.hasOwnProperty(item)) {
      list[item] += 1;
    } else {
      list[item] = 1;
    }
  }
}

groceryList();
