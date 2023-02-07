//check grater then 5----------->

function checkGrater5(number5) {
    let count = 0;
    for (let i = 0; i < number5.length; i++) {
        if (number5[i] > 5) {
            count++;
        }
    }
    return count;
}
let number5 = [-1, 2, -3, 4, 5, 6, 7, 8, -9, 10];
console.log(checkGrater5(number5));



//Return big length string---->
function reverseName(nameOne, nameTwo) {
    if (nameOne.length > nameTwo.length) {
        return nameOne.split("").reverse().join("");

    } else {
        return nameTwo.split("").reverse().join("");

    }
}
console.log(reverseName("salauddin", "mohammed"));



//Another method for reverse------->
let nameMy = "salauddin";
let reverseNames = '';
for (let i = nameMy.length - 1; i >= 0; i--) {
    reverseNames = reverseNames + nameMy[i];
}
console.log(reverseNames);

//File extension find out---------->>>
function checkExtension(fileName) {
    if (typeof fileName != "string" || fileName.length == "") {
        return "Your file is not string or empty";
    }
    if (fileName.endsWith(".js")) {
        return "Yes";
    } else {
        return "No";
    }
}
console.log(checkExtension("index.js"));
console.log(checkExtension(20));



//check he is my best friend or not----->
function findFriends(friend1, friend2) {
    if (friend1.name === friend2.friend && friend2.name === friend1.friend) {
        return true;
    } else {
        return false;
    }
}

console.log(findFriends({ name: "salauddin", friend: "shahin" }, { name: "shahin", friend: "salauddin" }));
