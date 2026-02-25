// Student class
class Student {
    constructor(id, name, semester, courses) {
        this.id = id;
        this.name = name;
        this.semester = semester;
        this.courses = courses;
    }

    // Method to return student details using template literals
    getDetails() {
        return `
            <div class="student-card">
                <h3>${this.name}</h3>
                <p><strong>ID:</strong> ${this.id}</p>
                <p><strong>Semester:</strong> ${this.semester}</p>
                <p><strong>Courses:</strong> ${this.courses.join(", ")}</p>
            </div>
        `;
    }
}

// Creating student objects using const
const student1 = new Student(101, "Saifullah Abbasi", 3, ["Web Development", "Database Systems"]);
const student2 = new Student(102, "Safi Ur Rehman", 2, ["OOP", "Data Structures"]);
const student3 = new Student(103, "Hussain Abdullah", 4, ["Artificial Intelligence", "Cloud Computing"]);

// Store students in an array using let
let students = [student1, student2, student3];

// Display students dynamically
const studentsDiv = document.getElementById("students");

students.forEach(student => {
    studentsDiv.innerHTML += student.getDetails();
});