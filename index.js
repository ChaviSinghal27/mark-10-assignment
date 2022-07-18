const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-btn");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");


const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click",function validateBillAmountAndCashAmount(){
message.style.Display = "none";
 if (billAmount.value > 0) {

    if (cashGiven.value >= billAmount.value) {

        const amountToBeReturned = cashGiven.value - billAmount.value;

        calculateChange(amountToBeReturned);


    } else {
            showMessage("Cash Amount should be atleast  equal to Bill Amount");
        }
    
   
 } else{
   showMessage("Bill amount should be greater than 0");
 }


});

function calculateChange(amountToBeReturned) {
    for ( var i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
   

}


function showMessage(msg) {
    message.display.style = "block";
    message.innerText = msg;
}


