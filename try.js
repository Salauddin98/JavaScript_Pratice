// function print(a, b, c){
//     return a+2;
//     return a*b;
//     return b*c+a;
//     if(false){

//     }
//   }
//   console.log(print(1,2,3));

// let phoneCalculation = [
//   { phone: "Samsung", color: "red", Ram: "32gb", Price: 30000},
//   { phone: "Nokia", color: "green", Ram: "32gb", Price: 10000},
//   { phone: "Oppo", color: "red", Ram: "32gb", Price: 20000},
//   { phone: "Walton", color: "red", Ram: "32gb", Price: 50000 },
//   { phone: "Iphone", color: "red", Ram: "62gb", Price: 90000 }
// ]

// function priceCalculationPhone(phonePrice) {
//   let sum = 0;
//   for (let i = 0; i < phonePrice.length; i++) {
//       sum = sum + phonePrice[i].Price;
//   }
//   return sum;
// }
// console.log(priceCalculationPhone(phoneCalculation));


// function lengthName(name1, name2) {
//   if (name1.length > name2.length) {
//       return name1.split(" ").reverse().join("");

//   }else{
//       return name2.split(" ").reverse().join("");

//   }
// }
// console.log(lengthName("salauddin","mohammed"));

// let item = 235;
// let cal = item % 50;
// let bus = cal % 11;
// console.log(cal);
// console.log(bus);

// let arrayNumber = [10,33,44,66,77,88,22];
// console.log(arrayNumber.splice(2,4,100,200,300,400));
// console.log(arrayNumber);

// function compare(a, b) {

//     if (a == b) {

//     return true;

//     } else {

//     return false;

//     }

//    }

//    const result = compare(15, "15");

//    console.log(result);


// function compare(a, b) {

//     if (a.toString() === b) {

//     return true;

//     } else {

//     return false;

//     }

//    }

//    const result = compare(25, 25);

//    console.log(result);
//    console.log("123" + 123);


//    let a="hi";

//    let b= "there";

//    console.log(a+b)


// const reverseMaker = (word) => {
//   //Write Your solution Here
//   let reverseResult = word.split("").reverse().join("");
//   return reverseResult;
// };
// console.log(reverseMaker("salauddin"));


// const totalCost = (products) => {
//   let sum = 0;
//   // for (let i = 0; i < products.length; i++) {
//   //   sum = sum + products[i].price;
//   // }
//   for (product of products){
//     sum = sum + product.price;
//   }
//   return sum;

// };
// let products = [{ name: "salauddin", price: 500 }, { name: "Nokia", price: 600 }];
// console.log(totalCost(products));



function mindGame(checkNumberInput) {
  if (typeof checkNumberInput != "number" || checkNumberInput < 0) {
  return "Enter a valid input";
  }
  else {
  const result = ((((checkNumberInput * 3) + 10) / 2) - 5);
  return result
  }
  }
  console.log(mindGame(0));


