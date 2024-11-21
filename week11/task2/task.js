class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(`Hello ${this.name}!`);
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
  showGrade() {
    console.log(`Person ${this.name} has ${this.grade} grade`);
  }
}

const student1 = new Student("Sergo", 20, 100);

student1.showGrade();
