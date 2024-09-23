const prompt = require("prompt-sync")();

function homeFederal() {
  let input = prompt("Greeting: ").toLowerCase();
  if (input.startsWith("h") && input === "hello") {
    console.log("$0");
  } else if (input.startsWith("h")) {
    console.log("$20");
  } else {
    console.log("$100");
  }
}

homeFederal();
