const numberInput = document.getElementById("number");
const convertButton = document.getElementById("convert-button");
const outputBox = document.getElementById("output");
const errorBox = document.querySelector(".error");

function resetOutput() {
    outputBox.textContent = "";
}

function intToRoman(num) {
    const symbolsList = [
        ["I", 1],
        ["IV", 4],
        ["V", 5],
        ["IX", 9],
        ["X", 10],
        ["XL", 40],
        ["L", 50],
        ["XC", 90],
        ["C", 100],
        ["CD", 400],
        ["D", 500],
        ["CM", 900],
        ["M", 1000],
        ['V\u0305', 5000],
        ['X\u0305', 10000],
        ['L\u0305', 50000],
        ['C\u0305', 100000],
        ['D\u0305', 500000],
        ['M\u0305', 1000000],
    ];

    let i = symbolsList.length - 1;
    let roman = "";
    while (num > 0) {
        const currentDivider = symbolsList[i][1];
        const currentSymbol = symbolsList[i][0];

        const result = Math.floor(num / currentDivider);
        if (result > 0) {
            let temp = "";
            for (let j = 0; j < result; j++) {
                temp += currentSymbol;
            }
            roman += temp;
            num %= currentDivider;
        }
        i -= 1;
    }
    return roman;
}

function convertNumber() {
    const num = numberInput.value;

    if (num == "") {
        errorBox.textContent = "Pleas enter a value.";
        resetOutput();
        return;
    }

    const parsedNum = parseInt(num, 10);

    if (isNaN(parsedNum)) {
        errorBox.textContent = "Error: Please enter a valid number.";
        resetOutput();
        return;
    }

    if (parsedNum < 1) {
        errorBox.textContent = "Error: Must be a number .";
        resetOutput();
        return;
    }

    if (parsedNum >= 4000000) {
        errorBox.textContent = "Error: Number must be less than  4000000.";
        resetOutput();
        return;
    }
    if (num.includes('.'))
        {
            errorBox.textContent ="enter a whole number"
            resetOutput();
            return;

        }

    const romanNumeral = intToRoman(parsedNum);
    outputBox.textContent = `Roman Numeral: ${romanNumeral}`;
    errorBox.textContent = "";
}

convertButton.addEventListener("click", function (ev) {
    ev.preventDefault();
    convertNumber();
});

document.addEventListener("keydown", function (ev) {
    if (ev.key === "Enter") {
        convertNumber();
    }
});















