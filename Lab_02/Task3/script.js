function completeTask(button) {
    let task = button.parentElement;
    task.style.textDecoration = "line-through";

    let tasks = document.querySelectorAll(".task");
    for (let i = 0; i < tasks.length; i++) {
        tasks[i].style.borderRadius = "6px";
    }
}

function removeTask(button) {
    button.parentElement.style.display = "none";
}
