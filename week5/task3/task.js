let nums = [1,11,2,63,27,52,78,32];

function sortedArray(array){
    return array.sort((a, b) => {return a-b})
}

console.log(sortedArray(nums))