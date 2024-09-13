const prompt = require('prompt-sync')();
const month = prompt('Enter a month: ')


if (month === 'January') {
    console.log('31 days');
} 
else if (month === 'February') {
    console.log('28 days');
} 
else if (month === 'March') {
    console.log('31 days');
} 
else if (month === 'April') {
    console.log('30 days');
} 
else if (month === 'May') {
    console.log('31 days');
} 
else if (month === 'June') {
    console.log('30 days');
} 
else if (month === 'July') {
    console.log('31 days');
} 
else if (month === 'August') {
    console.log('31 days');
} 
else if (month === 'September') {
    console.log('30 days');
} 
else if (month === 'October') {
    console.log('31 days');
} 
else if (month === 'November') {
    console.log('30 days');
} 
else if (month === 'December') {
    console.log('31 days');
} 
else {
    console.log('Invalid month');
}