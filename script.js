function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1 / num2;
}

let firstNumber = 0;
let operator = " ";
let secondNumber = 0;
const numberInputArray = [];

function operate(num1, opr, num2){
    switch(opr){
        case "+":
            return add(num1, num2);
            break;
        case "-":
            return subtract(num1, num2);
            break;
        case "*":
            return multiply(num1, num2);
            break;
        case "/":
            return divide(num1, num2);
            break;
    }
}

const displayArea = document.querySelector("#display-container");

const numberButtonsContainer = document.querySelector("#number-buttons-container");
const numberButtons = [];
for(let i = 0; i < 10; i++){
    numberButtons[i] = document.createElement("div");
    numberButtons[i].innerHTML = i;
}

numberButtons[10] = document.createElement("div");
numberButtons[10].innerHTML = ".";

for(let i = 0; i <= 10; i++){
    numberButtons[i].classList.add("number-buttons");
    numberButtonsContainer.appendChild(numberButtons[i]);
    numberButtons[i].addEventListener("click", () => {
        if(numberInputArray.length <= 16){
            if(i == 10){
                if(!numberInputArray.includes(".")){
                    if(numberInputArray.length == 0){
                        numberInputArray.push(0);
                        numberInputArray.push(".");
                    }else{
                        numberInputArray.push(".");
                    }
                }    
            }else{
                numberInputArray.push(i);
            }
        }
        secondNumber = +(numberInputArray.join(""));
        displayArea.innerHTML = numberInputArray.join("");
    });

    numberButtons[i].addEventListener("mouseenter", () => {
        numberButtons[i].classList.add("hover");
    })
    numberButtons[i].addEventListener("mouseleave", () => {
        numberButtons[i].classList.remove("hover");
    })
}
numberButtonsContainer.insertBefore(numberButtons[0], numberButtons[10]);

