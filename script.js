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
let operator = "empty";
let secondNumber = 0;
let result = 0;
const numberInputArray = []; // Store numbers as they are entered

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
        case "empty":
            return secondNumber;
    }
}

const displayArea = document.querySelector("#display-container");

// Number buttons

const numberButtonsContainer = document.querySelector("#number-buttons-container");
const numberButtons = [];
for(let i = 0; i < 10; i++){
    numberButtons[i] = document.createElement("div");
    numberButtons[i].textContent = i;
}

numberButtons[10] = document.createElement("div");
numberButtons[10].textContent = ".";

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
        displayArea.textContent = "";
        displayArea.textContent = numberInputArray.join("");
    });

    numberButtons[i].addEventListener("mouseenter", () => {
        numberButtons[i].classList.add("hover");
    })
    numberButtons[i].addEventListener("mouseleave", () => {
        numberButtons[i].classList.remove("hover");
    })
}
numberButtonsContainer.insertBefore(numberButtons[0], numberButtons[10]);

// Operator buttons

const operatorButtons = document.querySelectorAll(".operator-buttons");
operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if(numberInputArray.length != 0){
            result = operate(firstNumber, operator, secondNumber);
        }
        if(result != 0){
            displayArea.textContent = "";
            displayArea.textContent = result;
        }
        firstNumber = result;
        operator = button.textContent;
        numberInputArray.splice(0, numberInputArray.length);
    });
    button.addEventListener("mouseenter", () => {
        button.classList.add("hover");
    });
    button.addEventListener("mouseleave", () => {
        button.classList.remove("hover");
    });
});

const equalButton = document.querySelector("#equality-button");
equalButton.addEventListener("click", () => {
    if(operator != "empty" && numberInputArray.length != 0 ){
        result = operate(firstNumber, operator, secondNumber);
    }
        if(result != 0){
            displayArea.textContent = "";
            displayArea.textContent = result;
        }
        firstNumber = result;
        operator = "empty";
        numberInputArray.splice(0, numberInputArray.length);
});
equalButton.addEventListener("mouseenter", () => {
    equalButton.classList.add("hover");
});
equalButton.addEventListener("mouseleave", () => {
    equalButton.classList.remove("hover");
});