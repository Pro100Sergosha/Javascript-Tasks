let Person = {
  name: "Sergo",
  "last name": "Azizbekyan",
  age: 20,
};

Person.sayHello = function () {
  console.log(`Hello ${this.name} ${this["last name"]}!`);
};

Person.sayHello();
