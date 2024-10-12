let Person = {
  name: "Sergo",
  "last name": "Azizbekyan",
  age: 20,
};

delete Person.age;
console.log("1. \n");
console.log(Person);

console.log("\n");

console.log("\n");

Person.returnLength = function () {
  return this.job.length;
};
console.log("2. \n");
console.log(Person);
console.log("\n");

console.log("3. " + Person.returnLength());
console.log("\n");
c;

console.log("4. \n");
console.log(Person);
console.log("\n");

console.log("5. " + Person.hasOwnProperty("gender"));
console.log();
