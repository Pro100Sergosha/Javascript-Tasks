let nums = [
  1, 1, 11, 11, 11, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 2, 63, 27, 52, 78, 32,
];
let nums2 = [
  1, 23, 4, 1, 4, 5, 1, 23, 5, 6, 7, 5, 3, 34123, 4, 1, 1, 1, 1, 1, 11, 2, 63,
  27, 52, 78, 32,
];

function searchDuplicate(array1, array2) {
  let newArr = [];
  const set1 = new Set(array1);
  for (let i = 0; i < array2.length; i++) {
    if (set1.has(array2[i])) {
      newArr.push(array2[i]);
    }
  }
  return newArr;
}

console.log(searchDuplicate(nums, nums2));
