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

function addIncome(){
    let name = document.getElementById("incomeInputName").value;
    let amount = document.getElementById("incomeInputAmount").value;

    let income = {name, amount};
    incomes.push(income);

    renderIncomes();
}

function renderIncomes(){
    let list = document.getElementById("incomeList");
    list.innerHTML = "";

    incomes.forEach(exp => {
        let li = document.createElement("li");
        li.textContent = `${exp.name}: ${exp.amount}円`;
        list.appendChild(li);
    });
}

function addExpense(){
    let name = document.getElementById("expenseInputName").value;
    let amount = document.getElementById("expenseInputAmount").value;

    let expense = {name, amount};
    expenses.push(expense);
    renderExpenses();
}

function renderExpenses(){
    let list = document.getElementById("expenseList");
    list.innerHTML = "";

    expenses.forEach(exp => {
        let li = document.createElement("li");
        li.textContent = `${exp.name}: ${exp.amount}円`;
        list.appendChild(li);
    });
}