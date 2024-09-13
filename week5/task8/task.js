let nums = [1,1,11,11,11,11,1,1,1,1,1,1,1,1,1,1,11,2,63,27,52,78,32];

function numsQuantity(arr, element) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == element) {
            count++;
        }
    }
    return count;
}

console.log(numsQuantity(nums, 11))