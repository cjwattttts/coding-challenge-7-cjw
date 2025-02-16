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
const calculateLoyaltyDiscount = (amount, years) => { // establishes function to calculate discount based on customer's loyal years
    let discount = 0; // sets discount to 0
    if (years >= 5) discount = 0.15; // sets 15% discount
    else if (years >= 3) discount = 0.10; // sets 10% discount
    else discount = 0.5; // sets 5% discount

    let discountedPrice = amount * (1 - discount); // calculates discounted price

    return `Discounted Price: $${discountedPrice.toFixed(2)}`;
};

console.log(calculateLoyaltyDiscount(100, 6)); // Expected output: "Discounted Price: $85.00"
console.log(calculateLoyaltyDiscount(200, 2)); // Expected output: "Discounted Price: $190.00"

// TASK 4
function calculateShippingCost(weight, location, expedited = false) { // calculates shipping cost based on weight, location, and expedited status
    let baseCost = 0; // sets base cost to 0
    let perLbCost = 0; // sets per lb cost to 0

    if (location === "USA") { // sets values if location is USA
        baseCost = 5;
        perLbCost = 0.5;
    } else if (location === "Canada") { // sets values if location is Canada
        baseCost = 10;
        perLbCost = 0.7;
    }
    let totalCost = baseCost + (weight * perLbCost); // calculates total shipping cost
    if (expedited) totalCost += 10; // adds additional fee for expedited

    return `Shipping Cost: $${totalCost.toFixed(2)}`;
}

console.log(calculateShippingCost(10, "USA", true)); // Expected output: "Shipping Cost: $20.00"
console.log(calculateShippingCost(5, "Canada", false)); // Expected output: "Shipping Cost: $13.50"