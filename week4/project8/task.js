

function guessGame(){
    while (true){
        level = Number(prompt('Level: '))

        number = Math.round((Math.random() * level))
        console.log(typeof level)
        if (typeof level === 'number'){
            while (true){
                guess = Number(prompt('Guess: '))
                if (guess > number){
                    console.log('Too large!')
                }else if (guess < number){
                    console.log('Too small!')
                }else if (guess === number){
                    console.log('Just right!')
                    return 
                }else{
                    continue
                }
            }
        }else{
            continue
        }
    }
    
}

guessGame()