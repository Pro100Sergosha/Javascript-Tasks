const names = [
  "Alice",
  "Bob",
  "Charlie",
  "Alice",
  "Bob",
  "Alice",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Heidi",
  "Ivan",
  "Judy",
  "Charlie",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Heidi",
  "Ivan",
  "Judy",
  "Alice",
  "Bob",
  "Charlie",
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Heidi",
  "Ivan",
  "Judy",
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Heidi",
  "Ivan",
];

function countDuplicates(array) {
  let newArr = [];
  for (let name of array) {
    if (newArr.hasOwnProperty(name)) {
      newArr[name] += 1;
    } else {
      newArr[name] = 1;
    }
  }
  return newArr;
}

console.log(countDuplicates(names));
