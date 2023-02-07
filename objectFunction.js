// Array practice
var number = [10, 20, 30, 40, 50, 60];
console.log(number.slice(2, 4));
console.log(number.includes(30));

//Function Practice
function details(address) {
    console.log("Please share your details: ");
    console.log(address);
}
details("Bangladesh");

//Function practice using declare multiple parameter
function calculation(a, b, c, d) {
    var subtraction = a - b - c - d;
    return subtraction;
    // console.log("Subtraction Result: "+" "+result);
}
var storeAddResult1 = calculation(1, 2, 3, 4, 5);
var storeSubResult2 = calculation(2, 3, 4, 5, 6);
console.log(storeAddResult1);
console.log(storeSubResult2);

//Objective practice
var indentification = {
    name: "salauddin",
    age: 23,
    address: "Dhaka",
    study: "BSC"
}
//declare property value
console.log(indentification);
console.log(indentification.age);
indentification.address = "Tongi";
console.log(indentification.address);
var known = indentification["name"];
console.log(known);
var getKeys = Object.keys(indentification);
console.log(getKeys);
var getValues = Object.values(indentification);
console.log(getValues);
var knowingValue = "study";
var indentifyValue = indentification[knowingValue];
console.log(indentifyValue);

//set property value
indentification.address = "india";//first way
console.log(indentification);
indentification["name"] = "mohammed";//second way
console.log(indentification);
indentification[knowingValue] = 30;
console.log(indentification);

//property value and key find using loop
//process--1
var count = {
    shoes: 4,
    dress: 3,
    belt: 1,
    pant: 5,
    shirt: 7
}
var keys = Object.keys(count);
for (var i = 0; i < keys.length; i++) {
    var propertyName = keys[i];
    var propertyValue = count[propertyName];
    console.log(propertyName, propertyValue);
}

//process--2---using for in loop
for (var propertyName in count) {
    var value = count[propertyName];
    console.log(propertyName, value);
}