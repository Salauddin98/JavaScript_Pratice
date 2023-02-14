function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function getElementByValue(elementId) {
    const elementValue = document.getElementById(elementId);
    const elementValueString = elementValue.innerText;
    const elementValueConvert = parseFloat(elementValueString);
    return elementValueConvert;
}

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}