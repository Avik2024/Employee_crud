from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import mysql.connector
import os

app = Flask(__name__)
CORS(app)

# --- Update these credentials if needed ---
DB_HOST = os.getenv("DB_HOST", "localhost")
DB_USER = os.getenv("DB_USER", "root")
DB_PASS = os.getenv("DB_PASS", "rivu")        # <- put your password here or set env var DB_PASS
DB_NAME = os.getenv("DB_NAME", "employee_db")
# -----------------------------------------

conn = mysql.connector.connect(
    host=DB_HOST,
    user=DB_USER,
    password=DB_PASS,
    database=DB_NAME,
    autocommit=False
)
cursor = conn.cursor(dictionary=True)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/create", methods=["POST"])
def create():
    data = request.get_json()
    sql = """
      INSERT INTO employees (name, email, phone, salary, department)
      VALUES (%s, %s, %s, %s, %s)
    """
    cursor.execute(sql, (data.get("name"), data.get("email"), data.get("phone"),
                         data.get("salary"), data.get("department")))
    conn.commit()
    return jsonify({"message": "Employee added"}), 201


@app.route("/employees", methods=["GET"])
def employees():
    cursor.execute("SELECT * FROM employees ORDER BY id DESC")
    rows = cursor.fetchall()
    return jsonify(rows), 200


@app.route("/employee/<int:id>", methods=["GET"])
def get_employee(id):
    cursor.execute("SELECT * FROM employees WHERE id=%s", (id,))
    row = cursor.fetchone()
    if not row:
        return jsonify(None), 404
    return jsonify(row), 200


@app.route("/update/<int:id>", methods=["PUT"])
def update(id):
    data = request.get_json()
    sql = """
      UPDATE employees
      SET name=%s, email=%s, phone=%s, salary=%s, department=%s
      WHERE id=%s
    """
    cursor.execute(sql, (data.get("name"), data.get("email"), data.get("phone"),
                         data.get("salary"), data.get("department"), id))
    conn.commit()
    return jsonify({"message": "Employee updated"}), 200


@app.route("/delete/<int:id>", methods=["DELETE"])
def delete(id):
    cursor.execute("DELETE FROM employees WHERE id=%s", (id,))
    conn.commit()
    return jsonify({"message": "Employee deleted"}), 200


if __name__ == "__main__":
    # if you prefer different host/port use env vars or change here
    app.run(debug=True, host="0.0.0.0", port=5000)
