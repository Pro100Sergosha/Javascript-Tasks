const prompt = require("prompt-sync")();



function rectangularArea(){
    let length = Number(prompt('What is the length of the room in feet? '))
    let width = Number(prompt('What is the width of the room in feet? '))
    console.log(`You entered dimensions of ${length} feet by ${width} feet.`)
    console.log(`The area is `)
    console.log(`${length*width} square feet`)
    console.log(`${(length*width)*0.09290304} square meters`)
}

rectangularArea()