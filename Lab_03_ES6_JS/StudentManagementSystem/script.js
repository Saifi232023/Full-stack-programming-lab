class Student {
    constructor(id, name, semester, courses) {
        this.id = id;
        this.name = name;
        this.semester = semester;
        this.courses = courses;
    }

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

const student1 = new Student(1, "Ali", 3, ["DSA", "DBMS"]);
const student2 = new Student(2, "Sara", 5, ["AI", "Web Dev"]);
const student3 = new Student(3, "Ahmed", 2, ["OOP", "Math"]);

let students = [student1, student2, student3];

const container = document.getElementById("studentsContainer");

let output = "";
students.forEach(student => {
    output += student.getDetails();
});

container.innerHTML = output;