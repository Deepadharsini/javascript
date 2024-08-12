const decreaseButton = document.getElementById("decreasebutton");
const resetButton = document.getElementById("resetbutton");
const increaseButton = document.getElementById("increasebutton");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseButton.onclick = function(){
    count++;
    countLabel.textContent = count;
}
decreaseButton.onclick = function(){
    count--;
    countLabel.textContent = count;
}
resetButton.onclick = function(){
    count=0;
    countLabel.textContent = count;
}


