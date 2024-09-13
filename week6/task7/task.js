let numbers = [5, 12, 7, 42, 23, 18, 9, 31];

let newArr = numbers.reduce((num, sum) => (sum += num));

console.log(newArr);
