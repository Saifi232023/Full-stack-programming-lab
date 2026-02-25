function fetchUsers() {

    let isSuccess = true; // Change to false to test reject

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (isSuccess) {
                resolve([
                    { id: 1, name: "Saifullah Abbasi" },
                    { id: 2, name: "Safi Ur Rehman" },
                    { id: 3, name: "Hussain Abdullah" }
                ]);
            } else {
                reject("Failed to load data from server.");
            }

        }, 3000);
    });
}

function loadUsers() {

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Loading users...";

    fetchUsers()
        .then(users => {

            resultDiv.innerHTML = "";

            users.forEach(user => {
                resultDiv.innerHTML += `
                    <div class="user">
                        <strong>ID:</strong> ${user.id} <br>
                        <strong>Name:</strong> ${user.name}
                    </div>
                `;
            });
        })
        .catch(error => {
            resultDiv.innerHTML = `<p class="error">${error}</p>`;
        });
}