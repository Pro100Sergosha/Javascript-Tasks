let nums = [ 63, 27, 52, 78, 32 ];

function sumAllDigits(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum+=array[i]
    }
    return sum
}

console.log(sumAllDigits(nums))