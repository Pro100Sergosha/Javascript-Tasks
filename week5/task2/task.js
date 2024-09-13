let nums = [ 63, 27, 52, 78, 32 ];

function func(array){
    let sum = 0;
    for (let i = 0; i< array.length; i++){
        sum +=array[i]
    }
    return sum/array.length
}

console.log(func(nums))