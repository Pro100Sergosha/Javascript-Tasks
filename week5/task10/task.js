let nums = [1,1,11,11,11,11,1,1,1,1,1,1,1,1,1,1,11,2,63,27,52,78,32];

function findSecondMaxNum(array){
    return array.sort((a,b)=> {return b-a})[1]

}

console.log(findSecondMaxNum(nums))