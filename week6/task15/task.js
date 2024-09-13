let numbers = [
  7, -12, 23, -5, 31, -18, 9, -42, 18, -7, 5, -23, 12, -31, 42, -9,
];

let allPositive = numbers.every((number) => number > 0);
console.log(allPositive);

let somePositive = numbers.some((number) => number > 0);
console.log(somePositive);
