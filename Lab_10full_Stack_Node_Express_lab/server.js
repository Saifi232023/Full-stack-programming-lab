const express = require('express');
const app = express();
const PORT = 3000;

// Common CSS 
const style = `
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f4f6f8;
            margin: 0;
            padding: 0;
            text-align: center;
        }
        nav {
            background: #222;
            padding: 15px;
        }
        nav a {
            color: white;
            margin: 0 15px;
            text-decoration: none;
            font-weight: bold;
        }
        nav a:hover {
            color: #00adb5;
        }
        .container {
            padding: 30px;
        }
        h1 {
            color: #333;
        }
        ul {
            list-style: none;
            padding: 0;
        }
        li {
            background: white;
            margin: 10px auto;
            padding: 10px;
            width: 200px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
    </style>
`;

// Navbar
const navbar = `
    <nav>
        <a href="/">Home</a>
        <a href="/students">Students</a>
        <a href="/home">Home Msg</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
    </nav>
`;

// -----------------------------
// Task 1: Student List
// -----------------------------
const students = ["Ali", "Ahmed", "Hussain", "Fatima"];

app.get('/students', (req, res) => {
    let list = students.map(s => `<li>${s}</li>`).join("");

    res.send(`
        ${style}
        ${navbar}
        <div class="container">
            <h1>Student List</h1>
            <ul>${list}</ul>
        </div>
    `);
});

// -----------------------------
// Task 2: Message Routes
// -----------------------------
app.get('/home', (req, res) => {
    res.send(`
        ${style}
        ${navbar}
        <div class="container">
            <h1>Welcome Home</h1>
        </div>
    `);
});

app.get('/about', (req, res) => {
    res.send(`
        ${style}
        ${navbar}
        <div class="container">
            <h1>About Page</h1>
            <p>This is a simple Express lab project.</p>
        </div>
    `);
});

app.get('/contact', (req, res) => {
    res.send(`
        ${style}
        ${navbar}
        <div class="container">
            <h1>Contact Page</h1>
            <p>Email: example@email.com</p>
        </div>
    `);
});

// -----------------------------
// Task 3: Dynamic User
// -----------------------------
app.get('/user/:name', (req, res) => {
    const name = req.params.name;

    res.send(`
        ${style}
        ${navbar}
        <div class="container">
            <h1>Hello ${name}</h1>
        </div>
    `);
});

// -----------------------------
// Task 4: Home Page
// -----------------------------
app.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Lab 10</title>
            ${style}
        </head>
        <body>
            ${navbar}
            <div class="container">
                <h1>Welcome to Lab 10</h1>
                <p>This is a styled Express application.</p>

                <ul>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>Routing</li>
                </ul>
            </div>
        </body>
        </html>
    `);
});

// Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});