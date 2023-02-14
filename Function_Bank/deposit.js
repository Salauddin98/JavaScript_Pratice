// second variation using function-------------------------------------------------->
document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositTotal = getInputFieldValueById('deposit');
    // console.log(newDepositTotal)
    const previousDepositTotal = getElementByValue('deposit-amount');
    // console.log(previousDepositTotal);
    //newDepositTotal---
    const newDepositTotalAmount = previousDepositTotal + newDepositTotal;
    // console.log(newDepositTotalAmount);

    setTextElementValueById('deposit-amount',newDepositTotalAmount);

    //Balance part upgrade using the function------>
    const previousTotalBalance = getElementByValue('balance');
    const upgradeTotalBalance = previousTotalBalance + newDepositTotal;

    setTextElementValueById('balance',upgradeTotalBalance);
})





