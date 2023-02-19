document.getElementById('phone-btn-plus').addEventListener('click',function(){
    const newCaseNumber =  updateProductsNumber(true,'phone-input-field');
    updatePriceAmountPhone(newCaseNumber);
    calculationSubtotal(); 
})
document.getElementById('phone-btn-minus').addEventListener('click',function(){
    const newCaseNumber =  updateProductsNumber(false,'phone-input-field');
    updatePriceAmountPhone(newCaseNumber);
    calculationSubtotal();
})

