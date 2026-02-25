function fetchUsers() {
    const success = true; // change to false to test reject

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve([
                    { id: 1, name: "Ali" },
                    { id: 2, name: "Sara" },
                    { id: 3, name: "Ahmed" }
                ]);
            } else {
                reject("Failed to load users!");
            }
        }, 3000);
    });
}

function loadUsers() {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Loading...";

    fetchUsers()
        .then(users => {
            let output = "<h3>Users:</h3>";
            users.forEach(user => {
                output += `<p>${user.id} - ${user.name}</p>`;
            });
            resultDiv.innerHTML = output;
        })
        .catch(error => {
            resultDiv.innerHTML = `<p style="color:yellow;">${error}</p>`;
        });
}