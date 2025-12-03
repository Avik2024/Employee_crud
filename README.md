📌 Employee CRUD Management System (Flask + MySQL + HTML/CSS/JS)

A complete full-stack CRUD (Create, Read, Update, Delete) Employee Management System built using Python Flask, MySQL, and a clean HTML/CSS/JavaScript frontend.
This project runs fully on Linux Ubuntu and is ideal for learning full-stack development, building portfolio projects, and preparing for software engineering interviews.

🚀 Features

Add new employees

View all employees in a dynamic table

Edit employee details (pre-filled form)

Delete employees instantly

Responsive UI (pure HTML/CSS/JS)

Flask backend API

MySQL database integration

REST API using Fetch API

🛠 Tech Stack
Frontend

HTML5

CSS3

JavaScript (Fetch API)

Backend

Python 3

Flask

Flask-CORS

Database

MySQL 8 (Ubuntu)

📂 Folder Structure
Employee_crud/
 ├── app.py
 ├── README.md
 ├── templates/
 │     └── index.html
 ├── static/
 │     ├── style.css
 │     └── script.js
 └── requirements.txt

🗄 Database Schema (MySQL)
employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(120),
  phone VARCHAR(20),
  salary INT,
  department VARCHAR(100)
)

▶️ How to Run (Ubuntu Linux)
1️⃣ Install dependencies
pip install -r requirements.txt

2️⃣ Create database
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(120),
  phone VARCHAR(20),
  salary INT,
  department VARCHAR(100)
);

3️⃣ Run backend
python3 app.py

4️⃣ Open the application
http://127.0.0.1:5000

🎯 Purpose of This Project

This project demonstrates:

Full CRUD operations

Backend API development with Flask

MySQL database integration

Frontend ↔ Backend communication

Clean modular project structure

Perfect for:

College/University project

Resume portfolio

Python + MySQL learning

Backend/API practice

Interview preparation

⭐ Future Improvements

Bootstrap/Material UI redesign

Search & filters

Upload employee photo

Authentication system

Pagination for large datasets

Docker containerization

📸 Screenshot

(Upload your screenshot to GitHub and reference it here — example:)

![App Screenshot](screenshots/app.png)