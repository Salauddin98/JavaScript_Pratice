function balanceTrial(elementField, totalIncome, totalExpenses) {
    const totalBalanceShow = document.getElementById(elementField)
    const totalEarnAmount = totalIncome - totalExpenses;
    totalBalanceShow.innerText = totalEarnAmount;
    return totalEarnAmount;

}

function elementFieldValue(element) {
    const inputField = document.getElementById(element);
    const inputFieldValue = inputField.value;
    const convertInt = parseInt(inputFieldValue);
    inputField.value = '';
    return convertInt;
}

//ForSetValue innerText----------->
function setValueInnerText(elementValue,balanceAmount){
    const receivedValue = document.getElementById(elementValue);
    receivedValue.innerText = balanceAmount;
}