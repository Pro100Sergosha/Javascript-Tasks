const prompt = require("prompt-sync")();

function adieu() {
  let names = [];
  while (true) {
    let name = prompt("Name: ");
    if (name != "") {
      names.push(name);
    } else {
      if (names.length === 1) {
        console.log(`Adieu, adieu, to ${names[0]}`);
        return;
      } else if (names.length === 2) {
        console.log(`Adieu, adieu, to ${names[0]} and ${names[1]}`);
        return;
      } else {
        let allButLast = names.slice(0, -1).join(", ");
        let last = names[names.length - 1];
        console.log(`Adieu, adieu, to ${allButLast} and ${last}`);
        return;
      }
    }
  }
}

adieu();
