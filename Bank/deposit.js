// First variation using without function-------------------------------------------->
document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositValue = document.getElementById('deposit');
    const storeDepositValue = depositValue.value;
    const newDepositAmount = parseFloat(storeDepositValue);

    //clear the deposit filed
    depositValue.value = '';


    //upgrade deposit calculation
    const depositAmount = document.getElementById('deposit-amount');
    const totalDeposit = depositAmount.innerText;
    const currentDepositAmount = parseFloat(totalDeposit);

    const addTotalAmount = currentDepositAmount + newDepositAmount;
    depositAmount.innerText = addTotalAmount;



    //upgrade balance calculation----
    const upgradeBalance = document.getElementById('balance');
    const storeBalance = upgradeBalance.innerText;
    const convertUpgradeBalance = parseFloat(storeBalance);

    //add upgrade balance
    const calculationUpgradeBalance = convertUpgradeBalance + newDepositAmount;
    upgradeBalance.innerText = calculationUpgradeBalance;

})











