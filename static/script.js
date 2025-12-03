document.addEventListener("DOMContentLoaded", () => {
  loadEmployees();

  const form = document.getElementById("employeeForm");
  form.addEventListener("submit", saveEmployee);

  document.getElementById("resetBtn").addEventListener("click", () => {
    form.reset();
    document.getElementById("empId").value = "";
  });
});

async function saveEmployee(e) {
  e.preventDefault();
  const id = document.getElementById("empId").value;
  const payload = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    phone: document.getElementById("phone").value.trim(),
    salary: parseInt(document.getElementById("salary").value) || 0,
    department: document.getElementById("department").value.trim()
  };

  // basic validation
  if (!payload.name || !payload.email || !payload.phone || !payload.department) {
    alert("Please fill in all required fields.");
    return;
  }

  const url = id ? `/update/${id}` : "/create";
  const method = id ? "PUT" : "POST";

  try {
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error("Request failed");
    document.getElementById("employeeForm").reset();
    document.getElementById("empId").value = "";
    await loadEmployees();
  } catch (err) {
    console.error(err);
    alert("An error occurred. Check console for details.");
  }
}

async function loadEmployees() {
  try {
    const res = await fetch("/employees");
    const employees = await res.json();
    const tbody = document.getElementById("employeeTable");
    tbody.innerHTML = "";

    if (!Array.isArray(employees) || employees.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;color:#6b7280">No employees found</td></tr>`;
      return;
    }

    employees.forEach(emp => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${emp.id}</td>
        <td>${escapeHtml(emp.name)}</td>
        <td>${escapeHtml(emp.email)}</td>
        <td>${escapeHtml(emp.phone ?? "")}</td>
        <td>${emp.salary}</td>
        <td>${escapeHtml(emp.department)}</td>
        <td class="actions-cell">
          <button class="action-btn edit" onclick="editEmployee(${emp.id})">Edit</button>
          <button class="action-btn delete" onclick="deleteEmployee(${emp.id})">Delete</button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  } catch (err) {
    console.error("Load error:", err);
  }
}

async function editEmployee(id) {
  try {
    const res = await fetch(`/employee/${id}`);
    const emp = await res.json();
    if (!emp) { alert("Employee not found"); return; }

    document.getElementById("empId").value = emp.id;
    document.getElementById("name").value = emp.name || "";
    document.getElementById("email").value = emp.email || "";
    document.getElementById("phone").value = emp.phone || "";
    document.getElementById("salary").value = emp.salary || "";
    document.getElementById("department").value = emp.department || "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  } catch (err) {
    console.error(err);
    alert("Failed to fetch employee.");
  }
}

async function deleteEmployee(id) {
  if (!confirm("Delete this employee?")) return;
  try {
    const res = await fetch(`/delete/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Delete failed");
    await loadEmployees();
  } catch (err) {
    console.error(err);
    alert("Could not delete. Check console.");
  }
}

// very small html escape to avoid accidental injection
function escapeHtml(s) {
  if (!s) return "";
  return s.replaceAll("&", "&amp;")
          .replaceAll("<", "&lt;")
          .replaceAll(">", "&gt;")
          .replaceAll('"', "&quot;")
          .replaceAll("'", "&#39;");
}
