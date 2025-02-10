// Task 1: Business Profit Calculation

// Write a function that calculates total profit
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold;
    return profit;
};
// Log the total profit
console.log("Total Profit: $", calculateProfit(20, 30, 100)); // Total Profit: $1000
console.log("Total Profit $", calculateProfit(50, 70, 200)); // Total Profit: $4000
