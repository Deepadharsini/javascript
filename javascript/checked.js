/*const myCheckbox = document.getElementById("myCheckbox");
const visaButton = document.getElementById("visaButton");
const masterButton = document.getElementById("masterButton");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");
const mySubmit = document.getElementById("mySubmit");

mySubmit.onclick = function() {
    if(myCheckbox.checked){
         subResult.textContent = `You are subscribed!`;
    }
    else{
         subResult.textContent = `You are not subscribed!`;
    }
    if(visaButton.checked){
        paymentResult.textContent = `You are paying with visa`;
    } 
}*/
const fullName = "Farhanathu Saqthiya";
const firstName = fullName.slice(0,fullName.indexOf(" "));
console.log(firstName);