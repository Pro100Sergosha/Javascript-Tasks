class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(`Hello ${this.name}!`);
  }
}

const newPerson = new Person("Sergo", 20);
newPerson.sayHello();
