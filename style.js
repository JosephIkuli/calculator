let num1 = 8
let num2 = 4
document.getElementById("num1-el").innerText = num1
document.getElementById("num2-el").innerText = num2

let sumEl = document.getElementById("sum-el")
function add() {
    let result = num1 + num2
    sumEl.textContent = "Sum: " + result
}
function subtract() {
    let result = num1 - num2
    sumEl.textContent = "Sum: " + result
}
function divide() {
    let result = num1 / num2
    sumEl.textContent = "Sum: " + result
}
function multiply() {
    let result = num1 * num2
    sumEl.textContent = "Sum: " + result
}
