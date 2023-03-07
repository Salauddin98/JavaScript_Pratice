// DRY ---> Do Not Repeat Yourself
document.getElementById('btn-deposit').addEventListener("click", function () {
  // console.log('click');
  const newDepositAmount =parseInt(document.getElementById("deposit-field").value) ;
  // console.log(newDepositAmount)
  /* 
    1. get previous deposit total by id
 
    */
  const previousDepositTotal =parseInt(document.getElementById("deposit-total").innerText);
  // console.log(previousDepositTotal)
  // const tryThis = parseInt(previousDepositTotal)
  // console.log(previousBalanceTotal)

  // calculate new deposit total
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  // console.log(newDepositTotal)
  // console.log(newDepositTotal, previousDepositTotal, newDepositAmount);
  // set deposit total value
  setTextElementValueById("deposit-total", newDepositTotal);

  // get previous balance by using the function
  const previousBalanceTotal =parseInt(document.getElementById("balance-total").innerText);
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
})
  /*
  1. get the element by id
  2. get the value from the element
  3. convert string value to a number
  */

