function pushToMassive(number, massive, callback) {
  callback(number, massive);
  return massive;
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(pushToMassive(10, arr, (number, arr) => arr.push(number)));
