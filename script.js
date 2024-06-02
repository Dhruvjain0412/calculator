// Naming
var equation = ""
// resetOutput
function resetOutput() {
    document.querySelector(".output").textContent = "0";
    equation = ""
}
document.querySelector(".reset").addEventListener("click", resetOutput);
// Using Number in Output 
document.querySelectorAll(".direct").forEach(function (button) {
    button.addEventListener("click", function () {
        var clickedNumber = this.textContent;
        input(clickedNumber);
    });
});
function input(inputValue) {
    const checkOperator = '/*+'
    const lastChar = equation[equation.length - 1];

    if (checkOperator.includes(inputValue)) {
        if (checkOperator.includes(lastChar)) {
            equation = equation.slice(0, equation.length - 1);
        }
    } else if (inputValue === "-") {
        if (lastChar === "-") {
            return;
        }
    }
    equation += inputValue;
    document.querySelector(".output").textContent = equation;
}
document.addEventListener("keydown", (key) => {
    const keyInput = key.key
    if ((keyInput >= 0 && keyInput <= 9) || keyInput === "+" || keyInput === "-" || keyInput === "*" || keyInput === "/" || keyInput === ".") {
        input(keyInput)
    }
    else if (keyInput === "Enter") {
        solveEquation()
    }
    else if (keyInput === "Backspace") {
        backspace()
    }
});
// Backspacing
document.querySelector(".delete").addEventListener("click", backspace)
function backspace(click) {
    if (equation.length <= 1) {
        equation = ""
        document.querySelector(".output").textContent = 0;
    }
    else {
        equation = equation.slice(0, equation.length - 1)
        document.querySelector(".output").textContent = equation;
    }
}
// Solving the Output 
function solveEquation() {
    var answer = eval(equation);
    equation = ""
    document.querySelector(".output").textContent = answer;
}
document.querySelector(".solve").addEventListener("click", solveEquation)