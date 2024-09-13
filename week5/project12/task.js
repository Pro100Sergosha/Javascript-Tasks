const prompt = require("prompt-sync")();

function einstain() {
  const C = 300000000;
  const m = Number(prompt("M: "));
  const formula = C * C * m;
  console.log(`E: ${formula}`);
}

einstain();
