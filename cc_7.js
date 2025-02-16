// TASK 1
function calculateInvoice(subtotal, taxRate, discount) { // calculates total invoice amount
    let total = (subtotal + (subtotal * taxRate)) - discount; // calculates the total amount with tac minus discount
    console.log(`Total Invoice: $${total.toFixed(2)}`);
}

calculateInvoice(100, 0.08, 5); // Expected output: "Total Invoice: $103.00"
calculateInvoice(500, 0.1, 20); // Expected output: "Total Invoice: $530.00"

// TASK 2
const calculateHourlyWage = function(salary, hoursPerWeek) { // calculates employees hourly wage from annual salary and weekly hours
    let hourlyWage = salary / (hoursPerWeek * 52); // divides salary by total hours worked in a year to get hourly wage
    return `Hourly Wage: $${hourlyWage.toFixed(2)}`;
};

console.log(calculateHourlyWage(52000, 40)); // Expected output: "Hourly Wage: $25.00"
console.log(calculateHourlyWage(75000, 35)); // Expected output: "Hourly Wage: $41.21"

// TASK 3 
