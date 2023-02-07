var fruitsDetails = ["orange","banana","apple"];
//Find the index of banana
console.log(fruitsDetails.indexOf("banana"));

//Replace banana with mango
fruitsDetails[1] = "mango";
console.log(fruitsDetails);
//Remove Orange
fruitsDetails.shift("orange");
console.log(fruitsDetails);
//Add watermelon
fruitsDetails.push("watermelon");
console.log(fruitsDetails);
//How to find even number in an array
var number = [10,11,12,13,14,15,16];
for(var i=0; i<number.length;i++){
    if(number[i]%2==0){
        console.log("Index Number is"+ ' '+ [i] + ':' + ' ' +number[i]);
    }
} 
//MCQ solved
var i = 0;
for (i=0; i<5; i++){};
console.log(i);