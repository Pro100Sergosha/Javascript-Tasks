const prompt = require('prompt-sync')();
const grade = prompt('Enter your letter: ').toUpperCase()

if (grade === 'A') {
    console.log('Excellent');
} 
else if (grade === 'B') {
    console.log('Good');
} 
else if (grade === 'C') {
    console.log('Satisfactory');
} 
else if (grade === 'D') {
    console.log('Poor');
} 
else if (grade === 'E') {
    console.log('Very poor');
} 
else if (grade === 'F') {
    console.log('Failed');
} 
else {
    console.log('Invalid grade');
}