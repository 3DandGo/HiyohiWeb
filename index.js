const calculateButton = document.getElementById("calculateButton");
const remainingAmount = document.getElementById("remainingAmount");
const incomeAmount = document.getElementById("incomeAmount");
const expenseAmount = document.getElementById("expenseAmount");

const income = incomeAmount;
const expense = expenseAmount;

calculateButton.onclick = function(){
    console.log(income);
};