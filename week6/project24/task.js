const prompt = require("prompt-sync")();

function deepThought() {
  while (true) {
    let question = prompt(
      "What is the answer to the Great Question of Life, the Universe, and Everything? "
    ).toLowerCase();
    if (["42", "forty-two", "forty two"].includes(question)) {
      console.log("Yes");
      return;
    }
  }
}

deepThought();
