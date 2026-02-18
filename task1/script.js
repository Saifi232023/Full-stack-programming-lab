let ans1 = "8";
let ans2 = "javascript";
let ans3 = "document object model";

function checkQuiz() {
    let score = 0;

    if (document.getElementById("q1").value == ans1) score++;
    if (document.getElementById("q2").value.toLowerCase() == ans2) score++;
    if (document.getElementById("q3").value.toLowerCase() == ans3) score++;

    let message;

    if (score === 3)
        message = "Excellent Work!";
    else if (score === 2)
        message = "Good Job!";
    else
        message = "Try Again!";

    document.getElementById("result").innerHTML =
        "Score: " + score + "/3 <br>" + message;
}

function resetQuiz() {
    document.getElementById("q1").value = "";
    document.getElementById("q2").value = "";
    document.getElementById("q3").value = "";
    document.getElementById("result").innerHTML = "";
}
