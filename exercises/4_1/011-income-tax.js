let gross_salary = 4527.85;
let inss_discount, income_tax_discount, result;

// Calculating INSS discount
if (gross_salary < 1.1) {
  console.log("Please type a salary above BRL 1045,00 (minimum wage in Brazil).")
} else if (gross_salary <= 1556.94) {
  gross_salary *= 0.92
} else if (gross_salary >= 1556.95 && gross_salary <= 2594.92) {
  gross_salary *= 0.91
} else if (gross_salary >= 2594.93 && gross_salary <= 5189.82) {
  gross_salary *= 0.89;
} else {
  gross_salary -= 570.88;
}

// Calculating income tax discount
if (gross_salary <= 1903.98) {
  income_tax_discount = 0;
} else if (gross_salary >= 1903.99 && gross_salary <= 2826.65) {
  income_tax_discount = (gross_salary * 0.075) - 142.80;
} else if (gross_salary >= 2826,66 && gross_salary <= 3751,05) {
  income_tax_discount = (gross_salary * 0.15) - 354.80;
} else if (gross_salary >= 3751.06 && gross_salary <= 4664.68) {
  income_tax_discount = (gross_salary * 0.225) - 636.13;
} else {
  income_tax_discount = gross_salary - ((gross_salary * 0.275) - 869.36);
}

gross_salary -= income_tax_discount;
console.log(gross_salary.toFixed(2))


/* A contract worker in Brazil has th INSS (brazilian tax) and income tax deducted from his gross salary. Make a program that, given a gross salary, calculates the net to be received by the worker.
The notation for a salary of BRL 1500.10, for example, should be 1500.10. For tax ranges, use the following references:
INSS
Gross salary up to BRL 1,556.94: 8% rate
Gross salary from BRL 1,556.95 to BRL 2,594.92: 9% rate
Gross salary from BRL 2,594.93 to BRL 5,189.82: 11% rate
Gross salary above BRL 5,189.82: maximum rate of BRL 570.88

Income tax
Up to BRL 1,903.98: exempt from income tax
From BRL 1,903.99 to 2,826.65: rate of 7.5% and installment of BRL 142.80 to be deducted from tax
From BRL 2,826.66 to BRL 3,751.05: 15% rate and installment of BRL 354.80 to be deducted from tax
From BRL 3,751.06 to BRL 4,664.68: rate of 22.5% and installment of BRL 636.13 to be deducted from tax
Above BRL 4,664.68: rate of 27.5% and installment of BRL 869.36 to be deducted from tax.
Example: A worker has a gross salary of BRL 3,000.00, the calculation will be:
The gross salary is between BRL 2,594.93 to BRL 5,189.82, so its INSS rate is 11%. The INSS will be 11% of BRL 3,000, that is, BRL 330.00.
To find the base salary, subtract the INSS rate from the gross salary: BRL 3,000.00 - BRL 330.00 = BRL 2,670.00.
To take the amount of the income tax, we have a salary (already deducted from the INSS) between BRL 1,903.99 and 2,826.65, the rate being then 7.5%, with a portion of BRL 142.80 to be deducted from the tax. Thus, we have:
BRL 2,670.00: salary with INSS already deducted;
7.5%: income tax rate;
BRL 142.00 installment to be deducted from tax.
Doing the math, we have: (7.5% of BRL 2,670.00) - BRL 142.80 = BRL 57.45
The last calculation to get the net salary is BRL 2,670.00 - BRL 57.45 (base salary - income tax value) = BRL 2,612.55.
Result: BRL 2,612.55.
Tip: how about identifying the rates with explanatory name variables? */