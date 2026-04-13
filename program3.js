// Robert Gray
const readlineSync = require('readline-sync');

let str = readlineSync.question('Enter a string: ');
let lower = str.toLowerCase();

let freq = {};
let order = [];

for (let ch of lower) {
    if (ch >= 'a' && ch <= 'z') {
        if (!freq[ch]) {
            freq[ch] = 0;
            order.push(ch);
        }
        freq[ch]++;
    }
}

console.log('Letter frequencies:');
for (let ch of order) {
    console.log(ch + ': ' + freq[ch]);
}

let firstRepeat = order.find(ch => freq[ch] > 1);
console.log('First repeated letter: ' + firstRepeat);
