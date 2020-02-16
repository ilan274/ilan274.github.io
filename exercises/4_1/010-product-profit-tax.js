/* Write a program that, given the cost of a product and its sales value, calculates how much profit (in absolute numbers) the company will have when selling 1,000 of these products.
Note that a 20% tax is levied on the cost of the product, which must be considered when calculating the profit. Your program should also issue an error message and terminate if any of its input values are less than zero. */

let product_base = window.prompt("Enter product base price: ");
let product_sale = window.prompt("Enter product sale price: ");
let x1000 = ((product_sale - product_base) * 1000);
let = profit = ((x1000 / 100) * 80).toFixed(2);

if (product_base < 0.01 || product_sale < 0.01) {
  profit = "Please enter numbers above 0."
}

/* To interact with .html file, just create an id called 'result' (no quotes) and remove the double slash bellow */
// let result = document.getElementById("result").innerHTML = profit;