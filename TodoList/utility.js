//common function--->
function getInputFieldValue(inputElement) {
    const inputValue = document.getElementById(inputElement);
    const findInputValue = inputValue.value;
    inputValue.value = '';
    return findInputValue;
}