//calculation bus fair------------>
function publicBusFair(public){
    if(public!="number" || public<50){
        return "Provide valid participants";
    }else{
        let busNeed = public % 50;
        let microNeed = busNeed % 11;
        let totalCal = microNeed * 250;
        return totalCal;
    }
}
console.log("Total Fair is: ", publicBusFair(235));