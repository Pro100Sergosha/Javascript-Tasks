class Product {
  constructor(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = parseFloat(price);
    this.quantity = parseInt(quantity);
    this.total = this.getTotalPrice();
  }
  getTotalPrice() {
    return this.quantity * this.price;
  }
}

const product1 = new Product(1, "Banana", 2.7, 40);
const product2 = new Product(2, "Apple", 1.3, 23);
const product3 = new Product(3, "Pineapple", 4, 18);
console.log(product1.getTotalPrice());

class ShoppingCart {
  #cart = [];

  addProduct(product) {
    this.#cart.push(product);
    return this.#cart;
  }

  removeProduct(productId) {
    this.#cart = this.#cart.filter((val) => val.id != productId);
    return this.#cart;
  }

  checkout() {
    return this.#cart.reduce((total, product) => total + product.total, 0);
  }
}

const cart = new ShoppingCart();
cart.addProduct(product1);
cart.addProduct(product2);
cart.addProduct(product3);

console.log(cart.checkout());
