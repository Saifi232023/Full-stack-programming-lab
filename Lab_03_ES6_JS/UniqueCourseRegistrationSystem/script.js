const registeredCourses = new Set();

function addCourse() {
    const input = document.getElementById("courseInput");
    const courseName = input.value.trim();

    if (courseName !== "") {
        registeredCourses.add(courseName); // duplicates automatically ignored
        displayCourses();
    }

    input.value = "";
}

function displayCourses() {
    const container = document.getElementById("courseList");

    let output = "<h3>Registered Courses:</h3>";

    for (const course of registeredCourses) {
        output += `<p>${course}</p>`;
    }

    output += `<p><strong>Total Unique Courses:</strong> ${registeredCourses.size}</p>`;

    container.innerHTML = output;
}