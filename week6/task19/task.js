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
  { name: "Liam", age: 22 },
  { name: "Mia", age: 15 },
  { name: "Noah", age: 25 },
  { name: "Olivia", age: 30 },
  { name: "Aiden", age: 21 },
  { name: "Sophia", age: 23 },
  { name: "Lucas", age: 27 },
  { name: "Emma", age: 26 },
  { name: "Mason", age: 19 },
  { name: "Isabella", age: 28 },
];

let someUsersAdult = users.some((user) => user.age === 18);

console.log(someUsersAdult);
