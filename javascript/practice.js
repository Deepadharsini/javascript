/*let username = "Sara Ali Khan";
 username = username.trim();
 let letter = username.charAt(0);
 letter = letter.toUpperCase();
 
 let extraChars = username.slice(1);
 extraChars = extraChars.toLowerCase();
 username = letter + extraChars;
 console.log(username);
 let username = "Farhanathu Saqthiya";
 username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);
*/
/*let logginId = false;
let username;
let password;

while(!logginId){
    username = window.prompt("Enter your username");
    password = window.prompt("Enter your password");
    if(username == "myUsername" && password == "myPassword"){
        logginId = true;
        console.log("You are logged in!");
    }
    else {
        console.log("Invalid credentials! Please try again");
    }
}
*/
/*const min = 1;
const max = 100;
const answer = Math.floor(Math.random() *(max-min+1)+min);

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt("Guess a number between 1 and 100");
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Enter a valid number");
    }
    else if(guess <min || guess >max){
        window.alert("Enter a valid number");
    }
    else {
        attempts++;
        if(guess<answer){
            window.alert("Too low! try again!");
        }
        else if(guess >answer){
            window.alert("Too high! try again!");
        }
        else{
            window.alert(`Hurray!! it took ${attempts} attempts to succeed.`);
            running = false;
        }
    }
}
*/
/*function happyBirthday(name,age) {
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday to dear ${name}!`);
    console.log(`You are ${age} old!`);
}
let username = "Anu";
let age = "25";
happyBirthday(username,age);
*/
/*let fruits = ["apples","banana","grapes"];
let newFruits = [...fruits];

console.log(newFruits.join(""));
*/
const textbox = document.getElementById("textbox");
const fahrenheit = document.getElementById("toFahrenheit");
const celsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;
function convert() {
    if(fahrenheit.checked){
        temp = Number(textbox.value);
        temp  =temp*5/9+32;
        result.textContent = temp.toFixed(2)+"F";
    }
    else if(celsius.checked){
        temp = Number(textbox.value);
        temp = (temp-32)/(9/5);
        result.textContent = temp.toFixed(2)+"'C";
    }
    else{
        result.textContent="Select a unit";
    }
}