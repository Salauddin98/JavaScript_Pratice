//practice 1--------->
function foo() {
    console.log("foo");
    bar();
}
function bar() {
    console.log("bar");
}
foo();

//problem 2 solve------------>
function makeAvg1(a, b, c) {
    var sum = a + b + c;
    var avg = sum / 3;
    return avg;
}
console.log(makeAvg1(10, 20, 30));


//problem 3 practice---------->
function makeAvg(elementArray) {
    var sum = 0;
    for (var i = 0; i < elementArray.length; i++) {
        sum += elementArray[i];
        var avg = sum / elementArray.length;
    }
    return avg;
}
var elementArray = [10, 20, 30];
console.log(makeAvg(elementArray));

//just practice-------------->
var number = [10, 20, 30];
var sum = 0;
for (var i = 0; i < number.length; i++) {
    sum += number[i];
    var avg = sum / number.length;
}
console.log(avg);


//practice 4 solution

function evenOrOdd(x) {
    if (x % 2 == 0) {
        console.log("Its a even number");
        return x;
    } else {
        console.log("Its a odd number");
    }
}
value = evenOrOdd(20);
console.log(value);

//Alternative solution------------>
function evenOrOddCheck(numberItem) {
    for (var i = 0; i < number.length; i++) {
        if (number[i] % 2 == 0) {
            console.log("number is even");
        }
    }
    return number[i];
}
var numberItem = [10, 20, 23, 25, 30];
console.log(evenOrOddCheck(numberItem));


//practice 5 solution
var color = "yellow";
switch (color) {
    case "red":
        console.log("You may in danger!");
        break;
    case "yellow":
        console.log("You should stop");
        break;
    case "green":
        console.log("You should cross the road");
        break;
    default:
        console.log("No any color you see bro");
}