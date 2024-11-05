const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");
const equalButton = document.getElementById("equalButton");

let inputField = document.getElementById("inputField");


plusButton.addEventListener("click", PlusClicked);
minusButton.addEventListener("click", minusClicked);
equalButton.addEventListener("click", equalClicked);


function PlusClicked() {
    console.log("PlusClicked");
    inputField.value += ("+");
}
function minusClicked() {
    console.log("minusClicked");
    inputField.value += ("-");
}
function equalClicked() {
    console.log("equalClicked")
    inputField.value = eval(inputField.value);
}
