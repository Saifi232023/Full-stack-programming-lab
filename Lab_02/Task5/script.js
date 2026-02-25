function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    if (name === "") {
        message.innerHTML = "Name cannot be empty";
        return false;
    }

    if (age < 18 || age > 60) {
        message.innerHTML = "Age must be between 18 and 60";
        return false;
    }

    if (!email.includes("@")) {
        message.innerHTML = "Invalid email address";
        return false;
    }

    if (password.length < 6) {
        message.innerHTML = "Password must be at least 6 characters";
        return false;
    }

    if (confirm("Do you want to submit?")) {
        alert("Registration Successful!");
        return true;
    }

    return false;
}
