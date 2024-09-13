const prompt = require("prompt-sync")();

function retirement(){
    let currentAge = Number(prompt('What is your current age? '))
    let retirementAge = Number(prompt('At what age would you like to retire? '))
    console.log(`You have ${retirementAge-currentAge} years left until you can retire.`)
    console.log(`It\'s 2024, so you can retire in ${2024 + retirementAge-currentAge}`)
}

retirement()