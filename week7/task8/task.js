let Person = {
  name: "Sergo",
  "last name": "Azizbekyan",
  age: 20,
};

Person.job = "Not working for now :(";

Person.returnLength = function () {
  return this.job.length;
};

for (let property in Person) {
  console.log(property);
}
