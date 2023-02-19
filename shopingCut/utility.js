//For Case Price-----------------
function updateProductsNumber(isIncrease, valueSet) {
    const caseInputField = document.getElementById(valueSet);//'case-input-field'
    const caseInputFieldValue = caseInputField.value;
    const convertInputField = parseInt(caseInputFieldValue);
    let storeValue;
    if (isIncrease === true) {
        storeValue = convertInputField + 1;
    } else {
        storeValue = convertInputField - 1
    }
    caseInputField.value = storeValue;
    return storeValue;
}

function updatePriceAmountCase(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;
    const calculateAmount = document.getElementById('TotalAmount');
    calculateAmount.innerText = caseTotalPrice;

}

function updatePriceAmountPhone(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 1219;
    const calculateAmount = document.getElementById('totalPhoneAmount');
    calculateAmount.innerText = caseTotalPrice;
}


//For subTotal--------->
function getTextElementValueById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setElementValueById(element,value){
    const subTotal = document.getElementById(element);
    subTotal.innerText = value.toFixed(2);

}

function calculationSubtotal() {
    const currentPhoneTotalValue = getTextElementValueById('totalPhoneAmount');
    const currentCaseTotalValue = getTextElementValueById('TotalAmount')
    const currentSubTotal = currentPhoneTotalValue + currentCaseTotalValue;
    setElementValueById('sub-total',currentSubTotal);



    //calculate Tex---
    const taxAmount = currentSubTotal * 0.1;
    setElementValueById('tax-total',taxAmount)

    //Final Total---->
    const finalTotal = currentSubTotal + taxAmount;
    setElementValueById('totalFinal',finalTotal);
    
}
