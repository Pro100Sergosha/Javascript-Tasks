const prompt = require("prompt-sync")();

function converter(price) {
  if (price.includes("$")) {
    return parseFloat(price.split("$")[1]);
  } else if (price.includes('%')){
    return Number(price.split('%')[0]) / 100
  }else{
    return false
  }
}


function tipCalculator() {
    while (true){
        const price = converter(prompt('How much was the meal? '))
        if (price){
            const percent = converter(prompt('What percentage would you like to tip? ')) 
            console.log(`Leave \$${(price*percent).toFixed(2)}`)
            return 
        }else{
            console.log('Invalid format!')
        }
    }
}

tipCalculator()