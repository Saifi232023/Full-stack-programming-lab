const student1 = { name: "Ali", age: 21, semester: 5, courses: ["DSA", "AI"] };
const student2 = { name: "Sara", age: 22, semester: 6, courses: ["DBMS", "Web"] };
const student3 = { name: "Ahmed", age: 20, semester: 4, courses: ["Math", "OOP"] };

const studentsArray = [student1, student2, student3];

// Convert to JSON
const jsonData = JSON.stringify(studentsArray);

// Convert back to objects
const parsedData = JSON.parse(jsonData);

const container = document.getElementById("students");

let output = "<h3>Student Information:</h3>";

parsedData.forEach(student => {
    const { name, age, semester, courses } = student;

    output += `
        <p><strong>Name:</strong> ${name}</p>
        <p>Age: ${age}</p>
        <p>Semester: ${semester}</p>
        <p>Courses: ${courses.join(", ")}</p>
        <hr>
    `;
});

container.innerHTML = output;