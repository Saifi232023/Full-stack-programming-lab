function addColor(id) {
    let color = document.getElementById(id).value;

    let box = document.createElement("div");
    box.style.backgroundColor = color;

    document.getElementById("boxContainer").appendChild(box);

    document.getElementById("info").innerHTML =
        "Window Size: " + window.innerWidth + " x " + window.innerHeight;
}

function clearBoxes() {
    document.getElementById("boxContainer").innerHTML = "";
}
