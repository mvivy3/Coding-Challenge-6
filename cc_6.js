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


// Task 3: Employee Bonus Calculation

// Write an arrow function to determine a bonus
const calculateBonus = (salary, performanceRating) => {
let bonus;
    if (performanceRating === "Excellent"){
        bonus = salary * .20;
    } else if (performanceRating === "Good") {
        bonus = salary * .10;
    } else if (performanceRating === "Average") {
        bonus = salary * .05;
    }
    return bonus;
}
console.log("Bonus: $", calculateBonus(5000, "Excellent")); // Log the bonus, Bonus: $1000
console.log("Bonus: $", calculateBonus(7000, "Good")); // Bonus: $7000

// Task 4: Subscription Pricing Model
    
// Write a function that caclulates cost
function calculateSubscriptionCost(plan, months, discount = 0) { // 
    let monthlyCost;
    if (plan === "Basic") {
        monthlyCost = 10
    } else if (plan === "Premium") {
        monthlyCost = 20
    } else if (plan === "Enterprise") {
        monthlyCost === 50
    }let totalCost = (monthlyCost * months) - discount;
    return totalCost
};
console.log( `Total Cost: $${calculateSubscriptionCost("Basic", 6, 10)}`); // Log the total costs
console.log( `Total Cost: $${calculateSubscriptionCost("Premium", 12, 0)}`);

// Task 5: Currency Conversion
    
// Write a function that returns the converted amount
function convertCurrency(amount, exchangeRate) {
    return amount * exchangeRate;
    }
console.log(`Converted Amount: $${convertCurrency(100, 1.1)}`); // Log the converted currency
console.log(`Converted Amount: $${convertCurrency(250, 0.85)}`);
