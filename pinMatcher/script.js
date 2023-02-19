function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    } else {
        return getPin();
    }

}

function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generatePinBtn').addEventListener('click', function () {
    const storeValue = getPin();
    const randomInputFiled = document.getElementById('randomInput');
    randomInputFiled.value = storeValue
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const storeTypedNumber = document.getElementById('typed-number');
    const previousTypedNumber = storeTypedNumber.value;
    if (isNaN(number)) {
        if (number === 'C') {
            storeTypedNumber.value = '';
        } else if (number === '<') {
            const digits = previousTypedNumber.split('');
            digits.pop()
            const remainingDigits = digits.join('');
            storeTypedNumber.value = remainingDigits;
        }
    } else {
        const newTypedNumber = previousTypedNumber + number;
        storeTypedNumber.value = newTypedNumber;

    }
})

document.getElementById('submitBtn').addEventListener('click', function () {
    const checkValidInput = document.getElementById('typed-number');
    const storeValidInput = checkValidInput.value;

    const checkValidInputTwo = document.getElementById('randomInput')
    const storeValidInputTow = checkValidInputTwo.value;

    const errorMessage = document.getElementById('error');
    const validMessage = document.getElementById('valid');


    if (storeValidInput === storeValidInputTow) {
        validMessage.style.display = 'block';
        errorMessage.style.display = 'none';
    }else{
        errorMessage.style.display = 'block';
        validMessage.style.display = 'none';

    }
})