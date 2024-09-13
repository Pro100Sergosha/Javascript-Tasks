let nums = [1, 11, 2, 63, 27, 52, 78, 32];

function maxNum(array, number) {
  if (array.includes(number)) {
    let index = array.indexOf(number);
    array.splice(index, 1);
    return array;
  } else {
    return "This number not found";
  }
}

console.log(maxNum(nums, 41));
