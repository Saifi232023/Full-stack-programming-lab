function calculate() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let op = document.getElementById("operation").value;
    let result;

    if (isNaN(n1) || isNaN(n2)) {
        alert("Enter valid numbers");
        return;
    }

    if (op === "/" && n2 === 0) {
        alert("Cannot divide by zero");
        return;
    }

    if (op === "+") result = n1 + n2;
    if (op === "-") result = n1 - n2;
    if (op === "*") result = n1 * n2;
    if (op === "/") result = n1 / n2;

    let resultBox = document.getElementById("result");
    resultBox.innerHTML = "Result: " + result;

    resultBox.style.backgroundColor =
        result >= 0 ? "lightgreen" : "lightcoral";
}
