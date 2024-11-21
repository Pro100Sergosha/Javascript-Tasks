class Calculator {
  static sum(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
  }
}

const calc = new Calculator();
console.log(10 + Calculator.sum(10, 20));
