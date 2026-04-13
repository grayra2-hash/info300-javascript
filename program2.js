// Robert Gray
const readlineSync = require('readline-sync');

let n = parseInt(readlineSync.question('Enter the number of Fibonacci numbers to generate: '));

let fib = [];
let a = 0, b = 1;
for (let i = 0; i < n; i++) {
    fib.push(a);
    let temp = a + b;
    a = b;
    b = temp;
}

console.log('Full sequence: [' + fib.join(', ') + ']');

let odd = fib.filter(x => x % 2 !== 0);
console.log('Odd Fibonacci numbers: [' + odd.join(', ') + ']');

