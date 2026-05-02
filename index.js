let incomes = [];
let expenses = [];

function calculateIncome(){
    let incomeName = document.getElementById("incomeInputName").value;
    let incomeAmount = document.getElementById("incomeInputAmount").value;
    let expenseName = document.getElementById("expenseInputName").value;
    let expenseAmount = document.getElementById("expenseInputAmount").value;
    let remaining = document.getElementById("remainingAmount");

    let remainingamount = Number(incomeAmount) - Number(expenseAmount);
    remaining.textContent = remainingamount;

}

function resetCalculator(){
    let incomeName = document.getElementById("incomeInputName");
    let incomeAmount = document.getElementById("incomeInputAmount");
    let expenseName = document.getElementById("expenseInputName");
    let expenseAmount = document.getElementById("expenseInputAmount");

    incomeName.value = "";
    incomeAmount.value = "";
    expenseName.value = "";
    expenseAmount.value = "";
}