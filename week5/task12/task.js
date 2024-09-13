let nums = [
  1, 1, 11, 11, 11, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 2, 63, 27, 52, 78, 32,
];
let nums2 = [
  1, 23, 4, 1, 4, 5, 1, 23, 5, 6, 7, 5, 3, 34123, 4, 1, 1, 1, 1, 1, 11, 2, 63,
  27, 52, 78, 32,
];

function mergeArrays(array1, array2) {
    return array1.concat(array2).sort((a,b) =>{return a-b})
}

console.log(mergeArrays(nums, nums2))