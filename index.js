let incomes = [];
let expenses = [];

function calculateIncome(){
   
   let totalIncome = 0;
   let totalExpense = 0;

   incomes.forEach(inc => {
    totalIncome += Number(inc.amount);
   });

   expenses.forEach(exp => {
    totalExpense += Number(exp.amount);
   });

   let remainingAmount = totalIncome - totalExpense;
   let remaining = document.getElementById("remainingAmount");
   remaining.textContent = remainingAmount + "円";
}

function resetCalculator(){
    document.getElementById("incomeInputName").value = "";
    document.getElementById("incomeInputAmount").value = "";
    document.getElementById("expenseInputName").value = "";
    document.getElementById("expenseInputAmount").value = "";

    incomes = [];
    expenses = [];

    document.getElementById("incomeList").innerHTML = "";
    document.getElementById("expenseList").innerHTML = "";

    document.getElementById("remainingAmount").textContent = "¥ ---";
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