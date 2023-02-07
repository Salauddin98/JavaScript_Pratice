//?Find Ticket quantity---------------->
function ticketCount(numberTicket){
    const firstTicket = 100;
    const secondTicket = 90;
    const thirdTicket = 70;
    if(numberTicket<=100){
        let count = firstTicket * numberTicket;
        return count;
    }else if(numberTicket<=200){
        let first100Ticket = firstTicket * 100;
        let restTicket = numberTicket - 100;
        let restTicketPrice = restTicket * secondTicket;
        let totalTicketPrice = first100Ticket + restTicketPrice;
        return totalTicketPrice;
    }else if(numberTicket<=300){
        let firstTicket100 = firstTicket * 100;
        let restSecondTicketPrice = 100 * secondTicket;
        let restThirdTicket = numberTicket - 200;
        let restAnotherTicket = restThirdTicket * thirdTicket;
        let totalThirdTicket = firstTicket100 + restSecondTicketPrice + restAnotherTicket; 
        return totalThirdTicket;
    }
}

let numberTicket = 300;
console.log(ticketCount(numberTicket));
