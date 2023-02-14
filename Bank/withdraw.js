document.getElementById('btn-withdraw').addEventListener('click', function () {
    //withdraw part-------------->

    //show withdraw balance
    const withdrawValue = document.getElementById('withdrawInput');
    const storeWithdrawValue = withdrawValue.value;
    const convertWithdrawInput = parseFloat(storeWithdrawValue);
    withdrawValue.value = '';


    if (isNaN(convertWithdrawInput) || convertWithdrawInput<=0) {
        alert("Please Provide a valid number");
        return;
    }

    const withdrawAmount = document.getElementById('withdraw');
    const storeWithdraw = withdrawAmount.innerText;
    const convertWithdrawAmount = parseFloat(storeWithdraw);


    //Decrease balance calculation----
    const upgradeBalance = document.getElementById('balance');
    const storeBalance = upgradeBalance.innerText;
    const convertUpgradeBalance = parseFloat(storeBalance);


    //validation for calculation
    if (convertWithdrawInput > convertUpgradeBalance) {
        alert('Do not have sufficient balance for withdrawing');
        return;
    }

    const addWithdrawBalance = convertWithdrawInput + convertWithdrawAmount;
    withdrawAmount.innerText = addWithdrawBalance;

    //Decrease balance
    const calculationUpgradeBalance = convertUpgradeBalance - convertWithdrawInput;
    upgradeBalance.innerText = calculationUpgradeBalance;



    //    //upgrade deposit calculation
    //    const depositAmount = document.getElementById('deposit-amount');
    //    const totalDeposit = depositAmount.innerText;
    //    const currentDepositAmount = parseFloat(totalDeposit);

    //    const addTotalAmount = currentDepositAmount - addWithdrawBalance;
    //    depositAmount.innerText = addTotalAmount;



})