// Robert Gray
const readlineSync = require('readline-sync');

let start = parseInt(readlineSync.question("Enter start number: ")); // Fixed: used parseInt to convert string to number
let end = parseInt(readlineSync.question("Enter end number: "));     // Fixed: used parseInt to convert string to number

let count = 0;
for (let i = start; i <= end; i++) {
    if (i % 2 == 0) { // Fixed: changed i / 2 to i % 2 (modulus checks for even, division does not)
        count += 1;   // Fixed: changed =+ to += (=+ was resetting count to 1 each time, not incrementing)
    }
}

console.log("Even numbers between " + start + " and " + end + ": " + count);

