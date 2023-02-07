var nameFirst = "Mohammed";
var lastName = "Salauddin";

console.log(nameFirst);
console.log(lastName);
console.log(nameFirst + " " + lastName);

//convert string to int or float
var grade = "3.50";
var change = parseFloat(grade);
console.log(typeof change);

//to fixed apply
var apple = 0.1;
var orange = 0.2;
var sum = apple + orange;
sum = sum.toFixed(1);
sum = parseFloat(sum);

console.log(sum);

