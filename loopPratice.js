// While loop basic structure
var number = 0;
while(number<10){
    console.log(number);
    number++;
}

//Reverse Number Practice
for(var i=10;i>=0;i--){
    console.log(i);
}

//Break practice using array
var number = [10,15,17,20,25];
for(var i=0;i<number.length;i++){
    if(number[i]>20){
        break;
    }
    console.log(number[i]);
}

//continue practice
var number = [10,15,17,20,25];
for(var i=0;i<number.length;i++){
    if(number[i]>17){
        continue;
    }else if(number[i]>20){
        break;
    }
    console.log(number[i]);
}
