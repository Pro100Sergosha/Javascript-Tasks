let nums = [1,11,2,63,27,52,78,32];

function maxNum(array){
    return Math.min(...array)
}

console.log(maxNum(nums))