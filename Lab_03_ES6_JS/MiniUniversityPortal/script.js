class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.courses = new Set();
    }

    registerCourse(course) {
        this.courses.add(course);
    }
}

const students = new Map();

const s1 = new Student(1, "Ali");
s1.registerCourse("DSA");
s1.registerCourse("Web");

const s2 = new Student(2, "Sara");
s2.registerCourse("AI");
s2.registerCourse("DBMS");

students.set(s1.id, s1);
students.set(s2.id, s2);

function saveToServer() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data saved successfully!");
        }, 2000);
    });
}

function saveData() {
    const output = document.getElementById("output");
    output.innerHTML = "Saving data...";

    saveToServer().then(message => {
        let display = `<h3>${message}</h3>`;

        students.forEach(student => {
            display += `<p>${student.name} - Courses: ${[...student.courses].join(", ")}</p>`;
        });

        output.innerHTML = display;
    });
}
