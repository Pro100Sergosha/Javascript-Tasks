class Temperature {
  #celsius;
  get celsius() {
    return this.#celsius;
  }
  set fahrenheitToCelsius(fahrenheit) {
    this.#celsius = ((parseFloat(fahrenheit) - 32) * 5) / 9;
    return this.#celsius;
  }
}
