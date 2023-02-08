//Recursion function call---------------->
function recursionFunction(checkNumber) {
    if (checkNumber == 1) {
        return 1;
    }
    else {
        return checkNumber + recursionFunction(checkNumber - 1);
    }
}
console.log(recursionFunction(5));

//Practice recursion using ----->
function factorial(inputNumber) {
    if (inputNumber === 1) {
        return 1;
    } else {
        return inputNumber * factorial(inputNumber - 1);
    }
}
console.log(factorial(5));

//Arguments practice----->
function argumentsFunction(number1, number2, number3) {
    console.log(number1, number2, number3);
    console.log(arguments);//it is not array. it says array like object 
    console.log(arguments[4]);
}
argumentsFunction(10, 20, 30, 40, 50, 60);

//For of loop practice--------->
const arrayInput = [1, 3, 5, 6, 7, 8, 9];
for (arrayNumber of arrayInput) {
    console.log(arrayNumber);
}

//cout=
const totalCost = (products) => {
    let sum = 0;
    // for (let i = 0; i < products.length; i++) {
    //   sum = sum + products[i].price;
    // }
    for (product of products){
      sum = sum + product.price;
    }
    return sum;
  
  };
  let products = [{ name: "salauddin", price: 500 }, { name: "Nokia", price: 600 }];
  console.log(totalCost(products));
  