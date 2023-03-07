//common function--->
function getInputFieldValue(inputElement) {
    const inputValue = document.getElementById(inputElement);
    const findInputValue = inputValue.value;
    inputValue.value = '';
    return findInputValue;
}
function findTargetClass(targetClass,eventValue){
    const elements = document.getElementsByClassName(targetClass);
    for (const value of elements) {
        value.addEventListener('click', function (event) {
            event.target.parentNode.parentNode.style.display = eventValue;
            //   event.target.parentNode.parentNode.removeChild(event.target);
        })
    }
}