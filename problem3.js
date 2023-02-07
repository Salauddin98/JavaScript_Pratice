//Lep Year practice------->
function checkLepYear(check) {
    if (check % 4 == 0 && check % 100 != 0 || check % 400 == 0) {
        return true;
    }
    return false;
}
// var input = [2023,2020,2021,2024];
console.log("This is a lep year:", checkLepYear(2020));
console.log("This is a lep year: ", checkLepYear(2023));

// check it odd or even using function and array
function checkNumber(arrayItem) {
    var even = [];
    var odd = [];
    for (var i = 0; i < arrayItem.length; i++) {
        // var index = i;
        if (arrayItem[i] % 2 === 0) {
            even.push(arrayItem[i]);
            console.log("Even Number: ", even);
        } else {
            odd.push(arrayItem[i])
            console.log("Odd Number: ", odd);
        }
    }
}
var arrayItem = [10, 13, 16, 1, 20];
checkNumber(arrayItem);

//check it odd or even using function and array(print the result outside the for loop)---------
function checkNumber(arrayItem) {
    var even = [];
    var odd = [];
    var evenSum = 0;
    var oddSum = 0;
    for (var i = 0; i < arrayItem.length; i++) {
        // var index = i;
        if (arrayItem[i] % 2 === 0) {
            even.push(arrayItem[i]);
            evenSum = evenSum + arrayItem[i];
        } else {
            odd.push(arrayItem[i])
            oddSum = oddSum + arrayItem[i];
        }
    }
    console.log("Even Number: ", even);
    console.log("Even Number Sum: ", evenSum);
    console.log("Odd Number: ", odd);
    console.log("Odd Number Sum: ", oddSum);
}
var arrayItem = [10, 13, 16, 1, 20];
checkNumber(arrayItem);

//Factorial number calculation using function and for loop------->
function factorial(number) {
    var i = number;
    var result = 1;
    while (i >= 1) {
        result *= i;
        i--
    }
    return result;
}
console.log("Factorial result is: ",factorial(8));

