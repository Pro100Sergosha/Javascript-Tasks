let nums = [
  1, 1, 11, 11, 11, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 2, 63, 27, 52, 78, 32,
];
let nums2 = [
  1, 1, 11, 11, 11, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 2, 63, 27, 52, 78, 32,
];

function checkMassives(array1, array2) {
  if (array1.length != array2.length) {
    return false;
  }
  array1.sort((a, b) => {
    return a - b;
  });
  array2.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] != array2[i]) {
      return false;
    }
  }
  return true;
}

console.log(checkMassives(nums, nums2));
