class Circle {
  constructor(radius) {
    this.radius = parseFloat(radius);
  }
  countPerimeter() {
    return 2 * Math.PI * this.radius;
  }
  countArea() {
    return Math.PI * this.radius ** 2;
  }
}

const circ = new Circle(10);

console.log(circ.countPerimeter());
console.log(circ.countArea());
