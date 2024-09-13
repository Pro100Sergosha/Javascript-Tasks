const prompt = require('prompt-sync')();
const score = prompt('Enter your score: ')

if (score >= 91 && score <= 100){
    console.log('A')
}
else if (score >= 81 && score <=90){
    console.log('B')
}
else if (score >= 71 && score <=80){
    console.log('C')
}
else if (score >= 61 && score <=70){
    console.log('D')
}
else if (score >= 51 && score <= 60){
    console.log('E')
}
else if (score <= 50){
    console.log('Not passed')
}
else{
    console.log('Wrong number')
}

switch (true){
    case (score >= 91 && score <= 100):
        console.log('A');
        break;
    case (score >= 81 && score <=90):
        console.log('B');
        break;
    case (score >= 71 && score <=80):
        console.log('C');
        break;
    case (score >= 61 && score <=70):
        console.log('D');
        break;
    case (score >= 51 && score <= 60):
        console.log('E');
        break;
    case (score <= 50):
        console.log('Not passed');
        break;
    default:
        console.log('Wrong number')
}
