const randomNames = [
  "John",
  "Alice",
  "Bob",
  "Mary",
  "David",
  "Emma",
  "John",
  "Sophia",
  "Chris",
  "Olivia",
  "John",
  "Alice",
  "Michael",
  "Mary",
  "David",
  "Emma",
  "Michael",
  "Sophia",
  "Chris",
  "Olivia",
  "John",
  "Alice",
  "Bob",
  "Mary",
  "David",
  "Emma",
  "Michael",
  "Sophia",
  "Chris",
  "Olivia",
  "John",
  "Alice",
  "Bob",
  "Mary",
  "David",
  "Emma",
  "Michael",
  "Sophia",
  "Chris",
  "Olivia",
  "John",
  "Alice",
  "Bob",
  "Mary",
  "David",
  "Emma",
  "Michael",
  "Sophia",
  "Chris",
  "Olivia",
];

let newArray = {};
for (let name of randomNames) {
  if (newArray.hasOwnProperty(name)) {
    newArray[name] += 1;
  } else {
    newArray[name] = 0;
  }
}

console.log(newArray);
