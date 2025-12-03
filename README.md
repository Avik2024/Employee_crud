📌 Employee CRUD Management System (Flask + MySQL + HTML/CSS/JS)

A complete full-stack CRUD (Create, Read, Update, Delete) Employee Management System built using Python Flask backend, MySQL database, and a clean HTML/CSS/JavaScript frontend.
This project runs fully on Linux Ubuntu and is perfect for learning full-stack development and showcasing in your resume.


🚀 Features

Add new employees

View all employees in a dynamic table

Edit employee data (pre-filled form)

Delete employees instantly

Responsive frontend

Backend API using Flask

MySQL database integration

REST API calls using Fetch API (JavaScript)


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


employees(
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

3️⃣ Run the Flask server

python3 app.py


4️⃣ Open in browser

http://127.0.0.1:5000

🎯 Purpose

This project demonstrates:

Full CRUD operations

API development

MySQL database integration

Frontend + backend communication

Clean project structure

Perfect for:

College project

Resume portfolio

Python & MySQL learning

Interview preparation


⭐ Improvements You Can Add

Bootstrap UI

Search bar & filters

Employee photo upload

Auth/login system

Pagination

Done!

/home/avik/Pictures/Screenshots/Screenshot from 2025-12-03 11-15-35.png
