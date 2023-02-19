document.getElementById('calculateBtn').addEventListener('click', function () {
  const foodValue = elementFieldValue('food');
  const rentValue = elementFieldValue('rent');
  const clothValue = elementFieldValue('cloth');
  const totalIncomeAmount = document.getElementById('totalIncome').value;
  const totalIncome =parseInt(totalIncomeAmount);
  const totalExpenses = foodValue + rentValue + clothValue;

  if (foodValue === null || rentValue === null || clothValue === null || isNaN(foodValue) || isNaN(rentValue) || isNaN(clothValue) || totalIncome < 0 || foodValue < 0 || rentValue < 0 || clothValue < 0 || totalIncome === 'string' || foodValue === 'string' || rentValue === 'string' || clothValue === 'string') {
    return alert('Please enter a valid input !');
  }
  if (totalIncome < totalExpenses) {
    return alert('You have no sufficient balance for expenses!');
  }

  setValueInnerText('totalExpenses', totalExpenses)
  //TotalIncome calculation---->
  balanceTrial('balance', totalIncome, totalExpenses);
})


//save balance calculate---------->
document.getElementById('saveBtn').addEventListener('click', function () {
  const saveBalance = elementFieldValue('saveBalanceInput');
  const totalBalance = elementFieldValue('totalIncome');
  const storeSaveBalance = totalBalance * (saveBalance / 100);

  if (saveBalance < 0) {
    return alert('Please Provide a valid input');
  }

  //calculate remaining balance--->
  const remainingBalance = document.getElementById('remainingBalance');
  const receivedBalance = document.getElementById('balance').innerText;
  if (receivedBalance < storeSaveBalance) {
    return alert('You have no sufficient balance for saving')
  }
  setValueInnerText('savingAmountShow', storeSaveBalance);
  const remainingBalanceTotal = receivedBalance - storeSaveBalance;
  remainingBalance.innerText = remainingBalanceTotal;
})

