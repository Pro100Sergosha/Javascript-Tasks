let users = [
  { name: "Grace", age: 17 },
  { name: "Frank", age: 16 },
  { name: "Alice", age: 16 },
  { name: "Charlie", age: 18 },
  { name: "Eve", age: 20 },
  { name: "Diana", age: 19 },
  { name: "Hank", age: 18 },
  { name: "Ivy", age: 19 },
  { name: "Bob", age: 17 },
  { name: "Jack", age: 20 },
];

let sortedNames = users.sort((a, b) => a.name.localeCompare(b.name));
console.log(sortedNames);
