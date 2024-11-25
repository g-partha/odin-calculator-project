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

let firstNumber = "";
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
    }
}

const displayAreaSmall = document.querySelector("#display-container-small");
const displayAreaLarge = document.querySelector("#display-container-large");

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
        if(numberInputArray.length <= 10){
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
        displayAreaLarge.textContent = "";
        displayAreaLarge.textContent = numberInputArray.join("");
        if(firstNumber != "" && operator == "empty"){
            firstNumber = 0;
        }
    });

    numberButtons[i].addEventListener("mouseenter", () => {
        numberButtons[i].classList.add("hover");
    })
    numberButtons[i].addEventListener("mouseleave", () => {
        numberButtons[i].classList.remove("hover");
    })
    numberButtons[i].addEventListener("mousedown", () => {
        numberButtons[i].classList.remove("hover");
    })
    numberButtons[i].addEventListener("mouseup", () => {
        numberButtons[i].classList.add("hover");
    })
}
numberButtonsContainer.insertBefore(numberButtons[0], numberButtons[10]);
numberButtons[0].style.cssText = "flex-grow: 1;";

// Operator buttons
const operatorButtons = document.querySelectorAll(".operator-buttons");

function clickOperatorButton(){
        if(numberInputArray.length != 0 && operator != "empty"){
            if(secondNumber == 0 && operator == "/"){
                alert("Can't divide by 0!");
            }else{
                let resultBeforeRounding = operate(firstNumber, operator, secondNumber);
                result = (Math.round(resultBeforeRounding * 100) / 100);
            }
            displayAreaLarge.textContent = "";
            let resultString = result.toString();
            if(resultString.length > 10){
                if(resultString.includes(".")){
                    displayAreaLarge.textContent = resultString[0] + resultString[1] 
                                        + resultString[2] + "e^" + (resultString.length - 1);
                }else{
                    displayAreaLarge.textContent = resultString[0] + "." + resultString[1] 
                                        + resultString[2] + "e^" + (resultString.length - 1);
                }
            }else{
                displayAreaLarge.textContent = result;
            }
            firstNumber = result;
            numberInputArray.splice(0, numberInputArray.length);
            secondNumber = numberInputArray.join("");
            operator = this.textContent;

            let firstNumberString = firstNumber.toString();
            if(firstNumberString.length > 10){
                if(firstNumberString.includes(".")){
                    displayAreaSmall.textContent = firstNumberString[0] + firstNumberString[1] 
                                        + firstNumberString[2] + "e^" + (firstNumberString.length - 1) + operator;
                }else{
                    displayAreaSmall.textContent = firstNumberString[0] + "." + firstNumberString[1] 
                                        + firstNumberString[2] + "e^" + (firstNumberString.length - 1) + operator;
                }
            }else{
                displayAreaSmall.textContent = `${firstNumber} ${operator}`;
            }

        }else if(numberInputArray.length != 0 && operator == "empty"){
            firstNumber = secondNumber;
            numberInputArray.splice(0, numberInputArray.length);
            secondNumber = numberInputArray.join("");
            operator = this.textContent;
            let firstNumberString = firstNumber.toString();
            if(firstNumberString.length > 10){
                if(firstNumberString.includes(".")){
                    displayAreaSmall.textContent = firstNumberString[0] + firstNumberString[1] 
                                        + firstNumberString[2] + "e^" + (firstNumberString.length - 1) + operator;
                }else{
                    displayAreaSmall.textContent = firstNumberString[0] + "." + firstNumberString[1] 
                                        + firstNumberString[2] + "e^" + (firstNumberString.length - 1) + operator;
                }
            }else{
                displayAreaSmall.textContent = `${firstNumber} ${operator}`;
            }
        }else if(numberInputArray.length == 0 && operator == "empty"){
            operator = this.textContent;
            let firstNumberString = firstNumber.toString();
            if(firstNumberString.length > 10){
                if(firstNumberString.includes(".")){
                    displayAreaSmall.textContent = firstNumberString[0] + firstNumberString[1] 
                                        + firstNumberString[2] + "e^" + (firstNumberString.length - 1) + operator;
                }else{
                    displayAreaSmall.textContent = firstNumberString[0] + "." + firstNumberString[1] 
                                        + firstNumberString[2] + "e^" + (firstNumberString.length - 1) + operator;
                }
            }else{
                displayAreaSmall.textContent = `${firstNumber} ${operator}`;
            }
        }else if(numberInputArray.length ==  0 && operator != "empty"){
            operator = this.textContent;
            let firstNumberString = firstNumber.toString();
            if(firstNumberString.length > 10){
                if(firstNumberString.includes(".")){
                    displayAreaSmall.textContent = firstNumberString[0] + firstNumberString[1] 
                                        + firstNumberString[2] + "e^" + (firstNumberString.length - 1) + operator;
                }else{
                    displayAreaSmall.textContent = firstNumberString[0] + "." + firstNumberString[1] 
                                        + firstNumberString[2] + "e^" + (firstNumberString.length - 1) + operator;
                }
            }else{
                displayAreaSmall.textContent = `${firstNumber} ${operator}`;
            }

        }
}

operatorButtons.forEach((button) => {
    button.addEventListener("click", clickOperatorButton);

    button.addEventListener("mouseenter", () => {
        button.classList.add("hover");
    });
    button.addEventListener("mouseleave", () => {
        button.classList.remove("hover");
    });
    button.addEventListener("mousedown", () => {
        button.classList.remove("hover");
    });
    button.addEventListener("mouseup", () => {
        button.classList.add("hover");
    });
});

//Equal button
const equalButton = document.querySelector("#equality-button");

function clickEqualButton(){
    if(operator != "empty" && numberInputArray.length != 0 ){
        if(secondNumber == 0 && operator == "/"){
            alert("Can't divide by 0!");
        }else{
            let resultBeforeRounding = operate(firstNumber, operator, secondNumber);
            result = (Math.round(resultBeforeRounding * 100) / 100);
        }
        displayAreaLarge.textContent = "";
        let resultString = result.toString();
        if(resultString.length > 10){
            if(resultString.includes(".")){
                displayAreaLarge.textContent = resultString[0] + resultString[1] 
                                    + resultString[2] + "e^" + (resultString.length - 1);
            }else{
                displayAreaLarge.textContent = resultString[0] + "." + resultString[1] 
                                    + resultString[2] + "e^" + (resultString.length - 1);
            }
        }else{
            displayAreaLarge.textContent = result;
        }
        displayAreaSmall.textContent = displayAreaLarge.textContent;
        firstNumber = result;
        numberInputArray.splice(0, numberInputArray.length);
        secondNumber = numberInputArray.join("");
        operator = "empty";
    }else if(operator == "empty" && numberInputArray.length != 0 ){
        firstNumber == secondNumber;
        numberInputArray.splice(0, numberInputArray.length);
        secondNumber = numberInputArray.join("");
    }else if(operator != "empty" && numberInputArray.length == 0){
        operator = "empty";
        displayAreaSmall.textContent = displayAreaLarge.textContent;
    }
}

equalButton.addEventListener("click", clickEqualButton);
equalButton.addEventListener("mouseenter", () => {
    equalButton.classList.add("hover");
});
equalButton.addEventListener("mouseleave", () => {
    equalButton.classList.remove("hover");
});
equalButton.addEventListener("mousedown", () => {
    equalButton.classList.remove("hover");
});
equalButton.addEventListener("mouseup", () => {
    equalButton.classList.add("hover");
});

// Delete button
const deleteButton = document.querySelector("#delete-button");
deleteButton.addEventListener("click", () => {
    if(numberInputArray.length != 0){
        numberInputArray.pop();
        secondNumber = +(numberInputArray.join(""));
        displayAreaLarge.textContent = "";
        displayAreaLarge.textContent = numberInputArray.join("");
    }
});
deleteButton.addEventListener("mouseenter", () => {
    deleteButton.classList.add("hover");
});
deleteButton.addEventListener("mouseleave", () => {
    deleteButton.classList.remove("hover");
});
deleteButton.addEventListener("mousedown", () => {
    deleteButton.classList.remove("hover");
});
deleteButton.addEventListener("mouseup", () => {
    deleteButton.classList.add("hover");
});

// All clear button
const allClearButton = document.querySelector("#all-clear-button");
allClearButton.addEventListener("click", () => {
    firstNumber = 0;
    secondNumber = 0;
    operator = "empty";
    result = 0;
    numberInputArray.splice(0, numberInputArray.length);
    displayAreaLarge.textContent = "";
    displayAreaSmall.textContent = "";
});
allClearButton.addEventListener("mouseenter", () => {
    allClearButton.classList.add("hover");
});
allClearButton.addEventListener("mouseleave", () => {
    allClearButton.classList.remove("hover");
});
allClearButton.addEventListener("mousedown", () => {
    allClearButton.classList.remove("hover");
});
allClearButton.addEventListener("mouseup", () => {
    allClearButton.classList.add("hover");
});