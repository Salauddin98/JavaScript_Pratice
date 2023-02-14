document.getElementById('btn-withdraw').addEventListener('click',function(){
   const storeNewWithdrawBalance =  getInputFieldValueById('withdrawInput');
   const previousDepositStore = getElementByValue('withdraw');
   // if(NaN(storeNewWithdrawBalance) || storeNewWithdrawBalance < 0){
   //    alert('Please Provide a valid input');
   //    return;
   // }
   // if(storeNewWithdrawBalance > previousDepositStore){
   //    alert("Don't have sufficient balance for withdraw");
   //    return;
   // }
   const totalDepositBalance = storeNewWithdrawBalance + previousDepositStore;

   setTextElementValueById('withdraw',totalDepositBalance);

   //Decrease withdraw balance----->
   const previousWithdrawBalanceStore = getElementByValue('balance');
   const newTotalBalance = previousWithdrawBalanceStore - storeNewWithdrawBalance;
   setTextElementValueById('balance',newTotalBalance);
})