document.getElementById('Add-money-btn').addEventListener('click', function(event){
  event.preventDefault();
    const addmoney = getinputbyid('input-add-money');
    const inputpin = getinputbyid('input-pin')

    if(isNaN(addmoney)){
        alert('You did not send money');
        return; 
    }

    if(inputpin === 1234){
       
        const addBalance = gettextbyid('Balance')
        const newBalance = addBalance + addmoney
        document.getElementById('Balance').innerText = newBalance;

        const p = document.createElement('p')
        p.innerText = `added: ${addmoney} TK. Balance ${newBalance}`
       
        
        // added transaction history

        document.getElementById('transaction-container').appendChild(p)

    }
    else{
        alert('failed to added Money')
    }
})