document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    
    const cashoutmoney = getinputbyid('input-cash-out-money')
    const cashoutpin = getinputbyid('input-cash-out-pin')
    if(isNaN(cashoutmoney)){
        alert('You can not cash out money')
        return; 
    }
    
    
   if(cashoutpin === 1234){
       const balance = gettextbyid('Balance')
       if(cashoutmoney > balance){
           alert('You do not have enough money for cash out ')
           return;
       }
       const newBalance = balance - cashoutmoney
       
       document.getElementById('Balance').innerText = newBalance 

       const div = document.createElement('div');
       div.classList.add('bg-yellow-400');
       div.innerHTML = `
         <h4 class="text-black"> Cash Out </h4>
         <p class="text-black"> cash out ${cashoutmoney} tk, Balance ${newBalance}

       `
       document.getElementById('transaction-container').appendChild(div)

    //    validation

      
   }
   else{
    alert('failed to cash out')
   }
})