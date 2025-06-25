function getinputbyid(id){
    const getinput =  document.getElementById(id).value
    const getinputnumber = parseFloat(getinput)
    return getinputnumber

}

function gettextbyid(id){
    const gettext = document.getElementById(id).innerText
    const getnumber = parseFloat(gettext)
    return getnumber;
}

function showsectionsbyid(id){
  document.getElementById('add-money-form').classList.add('hidden')
  document.getElementById('cash-out-form').classList.add('hidden')
  document.getElementById('transaction-section').classList.add('hidden')
//   show by id 
  document.getElementById(id).classList.remove('hidden')
}