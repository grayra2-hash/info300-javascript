// Robert Gray
const readlineSync = require('readline-sync');
let n = parseInt(readlineSync.question('Enter a positive number (up to 1000): '));
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
let primes = [];
for (let i = 2; i <= n; i++) {
    if (isPrime(i)) primes.push(i);
}
console.log('Primes up to ' + n + ': [' + primes.join(', ') + ']');
let largestGap = 0, largestGapStart = 0, largestGapEnd = 0, totalGap = 0;
for (let i = 1; i < primes.length; i++) {
    let gap = primes[i] - primes[i - 1];
    totalGap += gap;
    if (gap > largestGap) {
        largestGap = gap;
        largestGapStart = primes[i - 1];
        largestGapEnd = primes[i];
    }
}
let averageGap = (totalGap / (primes.length - 1)).toFixed(2);
console.log('The largest gap is ' + largestGap + ', between ' + largestGapStart + ' and ' + largestGapEnd);
console.log('The average gap is ' + averageGap);

