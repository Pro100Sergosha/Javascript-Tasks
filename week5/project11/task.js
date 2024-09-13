const prompt = require("prompt-sync")();


function simpleMath(){
    let firstNum = Number(prompt('What is the first number? '))
    let secondNum = Number(prompt('What is the second number? '))
    console.log(`${firstNum} + ${secondNum} = ${firstNum +secondNum}`)
    console.log(`${firstNum} - ${secondNum} = ${firstNum -secondNum}`)
    console.log(`${firstNum} * ${secondNum} = ${firstNum *secondNum}`)
    console.log(`${firstNum} / ${secondNum} = ${firstNum /secondNum}`)
}

simpleMath()