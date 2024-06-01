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
        input(clickedNumber)
    });
});

function input(inputValue) {
    equation += inputValue
    document.querySelector(".output").textContent = equation;
}

document.addEventListener("keydown", (key) => {
    const keyInput = key.key
    if ((keyInput >= 0 && keyInput <= 9) || keyInput === '+' || keyInput === '-' || keyInput === '*' || keyInput === '/') {
        input(keyInput)
    }
    else if (keyInput === "Enter") {
        solveEquation()
    }
});

// Solving the Output 
function solveEquation() {
    var answer = eval(equation);
    equation = ""
    document.querySelector(".output").textContent = answer;
}
document.querySelector(".solve").addEventListener("click", solveEquation)