//check which man is win this game---->
function checkWinPerson(cinku, minku, rinku) {
    let result = Math.max(cinku, minku, rinku);
    if (result === cinku) {
        console.log("cinku get the cake");
    } else if (result === minku) {
        console.log("minku get the cake");
    } else {
        console.log("rinku get the cake");
    }
}
checkWinPerson(76, 89, 70);


//check taller person
function checkTallerPerson(tallerPerson) {
    for (let i = 0; i < tallerPerson.length; i++) {
        var result = Math.max(tallerPerson[i]);
    }
    return result;
}
var tallerPerson = [6, 8, 3, 9, 8];
console.log("Tallest Person his height is: ", checkTallerPerson(tallerPerson));


//Reverse a string ---------->
function reverseString(inputString) {
    let reversed = '';
    for (let i = inputString.length - 1; i >= 0; i--) {
        reversed = reversed + inputString[i];
    }
    return reversed;
}
var inputString = "My name is Salauddin";
console.log(reverseString(inputString));


//Reverse a word---------->
function reverseWord(inputSentence) {
    let words = inputSentence.split(' ');
    let reverseWord = [];
    for (let i = words.length - 1; i >= 0; i--) {
        reverseWord.push(words[i]);
    }
    return reverseWord;
}
var inputSentence = "My name is Salauddin";
console.log(reverseWord(inputString));

//Fibonacci number------>
let fibonacci = [0, 1];
for (var i = 2; i < 15; i++) {
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]; 
}
console.log(fibonacci);