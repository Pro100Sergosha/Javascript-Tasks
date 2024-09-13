let chars1 = ["f", "a", "z", "m", "e", "q", "u", "k", "x", "b", "o", "p", "s"];

let chars2 = ["r", "l", "h", "g", "t", "v", "i", "n", "y", "j", "d", "c", "w"];

function mergeCharacters(array1, array2) {
  return array1.concat(array2).sort();
}

console.log(mergeCharacters(chars1, chars2));
