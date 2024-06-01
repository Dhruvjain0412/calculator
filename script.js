
var result = document.querySelector(".output").textContent




$(document).ready(function () {
    $(".clear").click(function () {
        $(".output").text("Output");
    });

    $(".direct").click(function () {
        var result = $(".output").text();
        var clickedNumber = $(this).text();
        if (result === "Output") {
            result = "";
        }

        result += clickedNumber;

        $(".output").text(result);
    });

    $(".solve").click(function () {
        var equation = $(".output").text();
        var answer = eval(equation);
        $(".output").text(answer);
    });
});

