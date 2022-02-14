function generatePin(){
  const number = Math.round(Math.random() * 10000);
  const pinText = number + '';
  if(pinText.length == 4){
    pin = number;
  }else{
    generatePin();
  }

  document.getElementById('pin-number').value = pin;
}

// show the typed numbers one by one 
document.getElementById('key-pad').addEventListener('click', function(event){
  const typedNumber = event.target.innerText;
  // get the newNumber adding with shown previous number  
  const typedNumberField = document.getElementById('typed-numbers');
  if(isNaN(typedNumber)){
    if(typedNumber == 'C'){
      typedNumberField.value = '';
    }

  }else{
    const previousNumber = typedNumberField.value;
    const newNumber = previousNumber + typedNumber;

    typedNumberField.value = newNumber;
  }
});

// show the messages by verifying 
function verifyPin(){
  const pin = document.getElementById('pin-number').value;
  const typedPin = document.getElementById('typed-numbers').value;

  const errorMessage = document.getElementById('error-message');
  const successMessage = document.getElementById('success-message');
  if(pin == typedPin){
    successMessage.style.display = "block";
    errorMessage.style.display = "none";

  }else{
    errorMessage.style.display = "block";
    successMessage.style.display = "none";
  }

}

