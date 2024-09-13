const prompt = require('prompt-sync')();

function level(){
    while (true){
        answer = Number(prompt('Level: '))
        if (answer === 1){
            return 10
        }
        else if (answer === 2){
            return 100
        }
        else if (answer ===3){
            return 1000
        }
        else{
            continue
        }
    }
}


function game(level){
    score = 0
    for (let i = 0; i<10; i++){
    first = Math.round(Math.random() * level)
    second = Math.round(Math.random() * level)
    count = 0
    for (let i = 0; i<=3; i++){
        guess = Number(prompt(`${first} + ${second} = `))
        if (guess === first + second){
            score +=1
            break
        }else{
            console.log('EEE')
            count+=1
            if (count === 3){
                console.log(`${first} + ${second} = ${first+second}`)
                break
            }
        }
    }
}
console.log(`Score: ${score}`)
}

game(level())