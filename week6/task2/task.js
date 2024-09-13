let users = [
  { name: "Alice", age: 16 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 18 },
  { name: "Diana", age: 19 },
  { name: "Eve", age: 20 },
  { name: "Frank", age: 16 },
  { name: "Grace", age: 17 },
  { name: "Hank", age: 18 },
  { name: "Ivy", age: 19 },
  { name: "Jack", age: 20 },
];

let filteredUsers = users.filter((user) => user.age > 18);

console.log(filteredUsers);
