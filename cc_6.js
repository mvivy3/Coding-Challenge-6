// Task 1: Business Profit Calculation

// Write a function that calculates total profit
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold;
    return profit;
};
// Log the total profit
console.log("Total Profit: $", calculateProfit(20, 30, 100)); // Total Profit: $1000
console.log("Total Profit $", calculateProfit(50, 70, 200)); // Total Profit: $4000

// Task 2: Sales Tax Computation

// Declare a function expression that calculates sales tax
const calculateSalesTax = function(amount, taxRate) { 
    let salesTax = amount * taxRate
    return salesTax;
};
console.log("Sales Tax: $", calculateSalesTax(100, 0.07)); // Sales Tax: $7
console.log("Sales Tax: $", calculateSalesTax(500, 0.1)); // Sales Tax: $50
