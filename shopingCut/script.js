
document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateProductsNumber(true,'case-input-field');
    updatePriceAmountCase(newCaseNumber);
    calculationSubtotal();
})
document.getElementById('btn-case-minus').addEventListener('click', function () {
   const newCaseNumber = updateProductsNumber(false,'case-input-field');
   updatePriceAmountCase(newCaseNumber);
   calculationSubtotal();
})



















// document.getElementById('btn-case-plus').addEventListener('click', function () {
//     const caseInputField = document.getElementById('case-input-field');
//     const caseInputFieldValue = caseInputField.value;
//     const convertInputField = parseInt(caseInputFieldValue)
//     const storeValue = convertInputField + 1;
//     caseInputField.value = storeValue;
// })
// document.getElementById('btn-case-minus').addEventListener('click', function (event) {
//     const caseInputField = document.getElementById('case-input-field');
//     const caseInputFieldValue = caseInputField.value;
//     const convertInputField = parseInt(caseInputFieldValue)
//     const storeValue = convertInputField - 1;
//     if (event.target < 0) {
//         storeButton.setAttribute("disabled", true);
//     }
//     caseInputField.value = storeValue;
// })