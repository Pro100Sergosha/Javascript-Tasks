let nums = [1,1,11,11,11,11,1,1,1,1,1,1,1,1,1,1,11,2,63,27,52,78,32];

function sumOddNums(array){
    let sum = 0;
    for(let i = 0; i<array.length; i++){
        if(array[i] % 2 !==0){
            sum += array[i]
        }
    }
    return sum
}

console.log(sumOddNums(nums))