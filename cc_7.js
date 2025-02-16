// TASK 1
function calculateInvoice(subtotal, taxRate, discount) { // calculates total invoice amount
    let total = (subtotal + (subtotal * taxRate)) - discount; // calculates the total amount with tac minus discount
    console.log(`Total Invoice: $${total.toFixed(2)}`);
}

calculateInvoice(100, 0.08, 5); // Expected output: "Total Invoice: $103.00"
calculateInvoice(500, 0.1, 20); // Expected output: "Total Invoice: $530.00"

