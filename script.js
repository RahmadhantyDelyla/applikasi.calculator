const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
    display.focus();
    if (btnValue === "=") {
        try {
            output = eval(output.replace("%", "/100"));
            display.value = eval(output);
        } catch (error) {
            display.value = "Error";
        }
    } else if (btnValue === "AC") {
        output = "";
        display.value = "";
    } else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1);
        display.value = output;
    } else {
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
        display.value = output;
    }
};

buttons.forEach(button => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
