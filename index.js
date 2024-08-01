
let number = document.querySelector("#number");
const reset = document.querySelector("#reset");
const inc = document.querySelector("#inc");
const dec = document.querySelector("#dec");
const limit = document.querySelector("#limit");
const buttons = document.querySelectorAll("button");
let num = 0;
let userInput;
number.innerText = num;
buttons.forEach(button => {
    button.addEventListener("click", function () {
        behaviour(button.id);
    })
})
function behaviour(buttonName) {
    switch (buttonName) {
        case "inc":
            num++;
            number.innerText = num;
            checkLimit();
            break;
        case "reset":
            number.innerText = 0;
            num = 0;
            break;
        case "dec":
            num--;
            number.innerText = num;
            checkLimit();
            break;
        case "limit":
            userInput = prompt("Tell me the limit you want to reach...");
            checkLimit();
            break;
        default:
            alert("click a valid button");
            break;

    }
    
}


function checkLimit() {
    if (num === Number(userInput)) {
        alert("You reached your goal!!");
    }
}

