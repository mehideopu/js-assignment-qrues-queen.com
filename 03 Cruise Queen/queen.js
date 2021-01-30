const FirstClassPlusBtn = document.querySelector('.phone-plus');
const FirstClassMinusBtn = document.querySelector('.phone-minus');
const economyClassPlusBtn = document.querySelector( '.Economy-plus');
const economyClassMinusBtn = document.querySelector('.Economy-minus');



//increment btn
FirstClassPlusBtn.addEventListener( 'click',function(){
    let ticketCount= Number(document.querySelector('.ticketCount').Value);
    ticketCount++;
    
    document.querySelector('.ticketCount').Value = ticketCount;
    
    let ticketPrize = (document.querySelector(".ticketPrize").innerText=ticketCount * 150);                
    totalPrice();
});

//Amount Decrement
economyClassPlusBtn.addEventListener( 'click',function(){
    let ticketCount= Number(document.querySelector('.ticketCount').Value);
    ticketCount--;
    if (ticketCount < 0){
        ticketCount = 0;
    }  
    document.querySelector('.ticketCount').Value = ticketCount;
    
    let ticketPrize = (document.querySelector(".ticketPrize").innerText=ticketCount * 150);                
    totalPrice();
});


//economy increase 
FirstClassPlusBtn.addEventListener( 'click',function(){
    let EconomyTicketCount= Number(document.querySelector('.EconomyTicketCount').Value);
    EconomyTicketCount++;
    
    document.querySelector('.EconomyTicketCount').Value = EconomyTicketCount;
    
    let EconomyTicketCount = (document.querySelector(".EconomyTicketPrize").innerText = EconomyTicketCount * 100);                
    totalPrice();
});
//dicrease economy ticket

FirstClassPlusBtn.addEventListener( 'click',function(){
    let EconomyTicketCount= Number(document.querySelector('.EconomyTicketCount').Value);
    EconomyTicketCount--;
    if (EconomyTicketCount < 0){
        EconomyTicketCount = 0;
    }  
    document.querySelector('.EconomyTicketCount').Value = EconomyTicketCount;
    
    let EconomyTicketCount = (document.querySelector(".EconomyTicketPrize").innerText = EconomyTicketCount * 100);                
    totalPrice();
});








//total
function totalPrice(){

let ticketPrize = Number(document.querySelector('.ticketPrize').innerText);
let EconomyTicketPrize = Number(document.querySelector('.EconomyTicketPrize').innerText);
let subtotal = (document.querySelector('.subtotal').textContent = ticketPrize + EconomyTicketPrize);
let vat = Number(document.querySelector('.vat').textContent);
let total = (document.querySelector('.total').textContent = subtotal + vat);
document.querySelector('.vat').innerText = ((subtotal + vat) * .05).toFixed();
}