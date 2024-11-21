class Shape {
  calculateArea() {
    return None;
  }
}

class Circle extends Shape {
  calculateArea(radius) {
    return Math.PI * parseFloat(radius) ** 2;
  }
}

const circle1 = new Circle();
console.log(circle1.calculateArea(23));
class Rectangle extends Shape {
  calculateArea(height, width) {
    return parseFloat(height) * parseFloat(width);
  }
}

const rectangle1 = new Rectangle();

console.log(rectangle1.calculateArea(10, 14));
