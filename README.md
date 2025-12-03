📌 Employee CRUD Management System (Flask + MySQL + HTML/CSS/JS)

A complete full-stack CRUD (Create, Read, Update, Delete) Employee Management System built using Python Flask, MySQL, and a clean HTML/CSS/JavaScript frontend.

This project is ideal for learning full-stack development, building portfolio projects, and preparing for software engineering interviews, demonstrating end-to-end data flow and API design.

🚀 Features

Add new employees via a clean, validated form.

View all employees in a dynamic, responsive table.

Edit employee details using a pre-filled form for updates.

Delete employees instantly via the API.

Responsive UI built with pure HTML/CSS/JS.

Robust Flask backend serving as a REST API.

Seamless MySQL database integration.

Frontend ↔ Backend communication using the Fetch API.

🛠 Tech Stack

Component

Technology

Description

Backend

Python 3, Flask, Flask-CORS

Handles routing and business logic.

Database

MySQL 8

Persistent storage for employee records.

Frontend

HTML5, CSS3

Structure and styling.

Client-Side Logic

JavaScript (Fetch API)

Manages UI updates and API calls.

📂 Folder Structure

Employee_crud/
 ├── app.py                  # Flask backend application
 ├── README.md               # This documentation file
 ├── requirements.txt        # Python dependencies
 ├── templates/
 │     └── index.html        # Main and only frontend page
 └── static/
       ├── style.css         # Custom CSS for styling
       └── script.js         # Frontend JavaScript logic (API calls, DOM manipulation)




🗄 Database Schema (MySQL)

The application uses a single table, employees, in the employee_db database.

CREATE TABLE employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(120) UNIQUE NOT NULL,
  phone VARCHAR(20),
  salary INT,
  department VARCHAR(100)
);




▶️ How to Run (Ubuntu Linux)

Follow these steps to set up and run the application locally:

1️⃣ Install Dependencies

Ensure you have Python 3 and MySQL installed. Then, install the required Python packages:

pip install -r requirements.txt




2️⃣ Create and Populate Database

Log in to your MySQL server and execute the following commands to set up the database and table:

# Log in to MySQL (you may need 'sudo' or a specific user)
mysql -u root -p

# Create the database
CREATE DATABASE employee_db;

# Use the database
USE employee_db;

# Create the employees table
CREATE TABLE employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(120),
  phone VARCHAR(20),
  salary INT,
  department VARCHAR(100)
);

# Exit MySQL
exit




Note: Ensure you configure your database connection details (host, user, password, db name) within the app.py file to match your local setup.

3️⃣ Run Backend

Start the Flask application from the project root directory:

python3 app.py




You should see output indicating that the server is running.

4️⃣ Open the Application

Open your web browser and navigate to the following address:

[http://127.0.0.1:5000](http://127.0.0.1:5000)




🎯 Purpose of This Project

This system is a perfect demonstration of key full-stack concepts:

Full CRUD operations implemented across the frontend and backend.

Backend API development using Python Flask for RESTful endpoints.

MySQL database integration using a Python connector.

Frontend ↔ Backend communication using asynchronous JavaScript (Fetch API).

Demonstrates a clean, modular project structure.

⭐ Future Improvements

Implement Search & Filters functionality for the employee table.

Add Pagination for efficient handling of large datasets.

Integrate an Authentication system (e.g., login/logout).

Redesign the UI using a modern framework like Bootstrap or Material UI.

Containerize the application using Docker.

📸 Screenshot