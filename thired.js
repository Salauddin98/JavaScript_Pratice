//calculation power------------->
const result = Math.pow(2, 4);
console.log(result);

//Math.abs()-------->
const number1 = 30;
const number2 = 40;
const sub = Math.abs(number1 - number2);
console.log(sub);

//some number indent------>
const number3 = 2.46;
const number4 = 2.56;
console.log(Math.round(number3));
console.log(Math.round(number4));
console.log(Math.ceil(6.79));
console.log(Math.floor(7.9999));


for (let i = 0; i < 3; i++) {
    var res = Math.round(Math.random() * 6);
    console.log(res);
}

//i will try next time----
// var userInput = prompt("Enter Your number: ");
// var res = Math.round(Math.random() * 6);
// if (userInput === res) {
//     console.log("You won the game");
// } else {
//     console.log("Sry try again next time");
// }
console.log(Math.max(10,30,40,100,50));


//Number swapping ------->approach-1
let num1 = 10;
let num2 = 12;
console.log(num1,num2);
let temp = num1;
num1 = num2;
num2 = temp;
console.log(num1,num2);
//approach-2----------(Distructuring)>
[num1,num2]=[num2,num1]
console.log(num1,num2);

