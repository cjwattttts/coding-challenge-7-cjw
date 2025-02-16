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

// TASK 5
function calculateLoanInterest(principal, rate, years) { // calculates total interest
    let interest = principal * rate * years;
return `Interest Total: $${interest.toFixed(2)}`}

console.log(calculateLoanInterest(1000, 0.05, 3)); // Expected output: "Total Interest: $150.00"
console.log(calculateLoanInterest(5000, 0.07, 5)); // Expected output: "Total Interest: $1750.00"

// TASK 6
function filterHighValueTransactions(transactions, filterFunction) { // filters transactions greater than 1000
return transactions.filter(filterFunction);
}

let transactions = [500, 1200, 3000, 800, 2200];
console.log(filterHighValueTransactions(transactions, amount => amount > 1000)); // Expected output: [1200, 3000, 2200]

// TASK 7
function createBudgetTracker() { // sets the balance to 0
    let balance = 0;

    return function(expense) { // creates a function to add expenses 
        balance -= expense; // removes expense from balance
        return `Current Balance: $${balance}`;
    };
}

// TASK 8
function calculateGrowth(years, revenue) { // calculates projected revenue growth adding 5% every year
    if (years === 10) return `Projected Revenue: $${revenue.toFixed(2)}`; // if years equals 10, return current revenue

    revenue *= 1.05; // increase revenue by 5% and call function with years -1
    return calculateGrowth(years +1, revenue);
}

console.log(calculateGrowth(8, 1000)); // Expected output: "Projected Revenue: $1102.50"
console.log(calculateGrowth(5, 5000)); // Expected output: "Projected Revenue: $6381.41"
