// Robert Gray
const readlineSync = require('readline-sync');
let currentAverage = parseFloat(readlineSync.question('Enter your current average: '));
let scores = [];
while (true) {
    let input = readlineSync.question('Enter a hypothetical final exam score (or "done" to finish): ');
    if (input === 'done') break;
    let score = parseFloat(input);
    if (score < 0 || score > 100 || isNaN(score)) {
        console.log('Score must be between 0 and 100. Try again.');
        continue;
    }
    scores.push(score);
}
console.log('\n--- Grade Forecast ---');
for (let score of scores) {
    let finalAverage = (currentAverage * 0.75) + (score * 0.25);
    let letter;
    if (finalAverage >= 90) letter = 'A';
    else if (finalAverage >= 80) letter = 'B';
    else if (finalAverage >= 70) letter = 'C';
    else if (finalAverage >= 60) letter = 'D';
    else letter = 'F';
    let change;
    if (finalAverage > currentAverage) change = 'improved';
    else if (finalAverage < currentAverage) change = 'declined';
    else change = 'stayed the same';
    console.log('\nFinal exam score: ' + score);
    console.log('Final course average: ' + finalAverage.toFixed(2));
    console.log('Letter grade: ' + letter);
    console.log('Grade ' + change + ' compared to current average.');
}

