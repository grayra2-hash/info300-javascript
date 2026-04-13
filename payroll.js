// Robert Gray
const readlineSync = require('readline-sync');

let employees = [];

for (let i = 0; i < 3; i++) {
    console.log('\nEmployee ' + (i + 1) + ':');
    let name = readlineSync.question('Name: ');

    let wage;
    while (true) {
        wage = parseFloat(readlineSync.question('Hourly wage: '));
        if (wage > 0) break;
        console.log('Wage must be positive. Try again.');
    }

    let hours;
    while (true) {
        hours = parseFloat(readlineSync.question('Hours worked: '));
        if (hours >= 0 && hours <= 80) break;
        console.log('Hours must be between 0 and 80. Try again.');
    }

    let regularHours = Math.min(hours, 40);
    let overtimeHours = Math.max(hours - 40, 0);
    let regularPay = regularHours * wage;
    let overtimePay = overtimeHours * wage * 1.5;
    let totalPay = regularPay + overtimePay;

    employees.push({ name, hours, regularPay, overtimePay, totalPay });
}

console.log('\n--- Payroll Report ---');
let highest = employees[0];
for (let emp of employees) {
    console.log('\nName: ' + emp.name);
    console.log('Total hours: ' + emp.hours);
    console.log('Regular pay: $' + emp.regularPay.toFixed(2));
    console.log('Overtime pay: $' + emp.overtimePay.toFixed(2));
    console.log('Total pay: $' + emp.totalPay.toFixed(2));
    if (emp.totalPay > highest.totalPay) highest = emp;
}

console.log('\nHighest paid employee: ' + highest.name + ' ($' + highest.totalPay.toFixed(2) + ')');
