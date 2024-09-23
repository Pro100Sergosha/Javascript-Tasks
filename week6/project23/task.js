const prompt = require("prompt-sync")();

function compound() {
  let principal = Number(prompt("Enter the principal: "));
  let rate = parseFloat(prompt("Enter the rate of interest: "));
  let years = Number(prompt("Enter the number of years: "));
  let times = Number(
    prompt("What is the number of times the interest is compounded per year? ")
  );
  const formula = principal * (1 + rate / 100 / times) ** (times * years);

  console.log(
    `$${principal} invested at ${rate}% for ${years} years compounded ${times} times per year is $${formula.toFixed(
      2
    )}.`
  );
}

compound();
