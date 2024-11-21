class BankAccount {
  #balance;
  constructor(balance) {
    this.#balance = balance;
  }
  withdraw(amount) {
    if (this.#balance - parseInt(amount) < 0) {
      console.log("Not enough money :/");
      return;
    } else {
      this.#balance = this.#balance - parseInt(amount);
      console.log(`Your have withrawed ${amount}\n${this.#balance} left.`);
      return;
    }
  }
  deposit(amount) {
    this.#balance = this.#balance + parseInt(amount);
    console.log(
      `Amount added to your balance: ${amount}\nTotal balance: ${this.#balance}`
    );
    return;
  }
}

const testBank = new BankAccount(500);
testBank.deposit(100);
testBank.withdraw(600);
