function protoProduct(title, price) {
  this.title = title;
  this.price = price;
}

function protoCart(size) {
  this.size = size;
  this.cart = [];
}

protoProduct.prototype.showPrice = function () {
  console.log(`${this.title} costs ${this.price}`);
};
protoCart.prototype.addProduct = function (product) {
  this.cart.push(product);
  return cart;
};
protoCart.prototype.showAllProductPrice = function () {
  return this.cart.reduce((fullPrice, product) => fullPrice + product.price, 0);
};
let banana = new protoProduct("Banana", 10);
let apple = new protoProduct("Apple", 5);
let pineapple = new protoProduct("Pinapple", 13);
let grape = new protoProduct("Grape", 9);
let cart = new protoCart(10);

cart.addProduct(banana);
cart.addProduct(apple);
cart.addProduct(pineapple);
cart.addProduct(grape);
console.log(cart.showAllProductPrice());
