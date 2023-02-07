//check array it is yes or not
let array = [59, 50, 60, 33, 80];
console.log(Array.isArray(array));

//concat array element ------>
let array1 = [60, 30, 49, 66];
let array2 = [70, 33, 44, 22];
console.log(array1.concat(array2));

//Array.splice
let array3 = [60, 30, 49, 66];
console.log(array3.splice(1, 3, 100, 200));
console.log(array3);

//Remove duplicate value in an array using includes------>
function checkDuplicateValues(name) {
    let storeUniqueName = [];
    for (let i = 0; i < name.length; i++) {
        if (storeUniqueName.includes(name[i]) === false) {
            storeUniqueName.push(name[i]);
        }
    }
    return storeUniqueName;
}
let nameUser = ["salauddin", "jasim", "emon", "salauddin", "bunny", "karim", "jasim"];
console.log(checkDuplicateValues(nameUser));

//Check a number divide 3 and 5 or 3 and 5 both----->
function checkNumber(givenNumber) {
    for (let i = 1; i <= givenNumber; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("Foo and Bar");
        }
        else if (i % 3 == 0) {
            console.log("FOO");
        } else if (i % 5 == 0) {
            console.log("Bar");
        }
    }
}

let givenNumber = 50;
checkNumber(givenNumber);

//Find the cheapest phone using object and function----->
let phoneDetails = [
    { phone: "Samsung", color: "red", Ram: "32gb", Price: "30000" },
    { phone: "Nokia", color: "green", Ram: "32gb", Price: "10000" },
    { phone: "Oppo", color: "red", Ram: "32gb", Price: "20000" },
    { phone: "Walton", color: "red", Ram: "32gb", Price: "50000" },
    { phone: "Iphone", color: "red", Ram: "62gb", Price: "90000" }
]

function findCheapestPhone(phoneDetails) {
    let HeightPricePhone = phoneDetails[0];
    let sum = 0;
    for (let i = 0; i < phoneDetails.length; i++) {
        // sum = sum + phoneDetails[i].Price;
        if (phoneDetails[i].Price > HeightPricePhone.Price) {
            HeightPricePhone = phoneDetails[i];
        }
    }
    console.log("Total mobile price: ", sum);
    return HeightPricePhone;
}
console.log(findCheapestPhone(phoneDetails));

//calculation the total price of the mobile with quantity
let phoneCalculation = [
    { phone: "Samsung", color: "red", Ram: "32gb", Price: 30000,quantity:2},
    { phone: "Nokia", color: "green", Ram: "32gb", Price: 10000,quantity:6},
    { phone: "Oppo", color: "red", Ram: "32gb", Price: 20000,quantity:1},
    { phone: "Walton", color: "red", Ram: "32gb", Price: 50000 ,quantity:4},
    { phone: "Iphone", color: "red", Ram: "62gb", Price: 90000 ,quantity:3}
]

function priceCalculationPhone(phonePrice) {
    let sum = 0;
    for (let i = 0; i < phonePrice.length; i++) {
        sum = sum + phonePrice[i].Price * phonePrice[i].quantity;
    }
    return sum;
}
console.log(priceCalculationPhone(phoneCalculation));

