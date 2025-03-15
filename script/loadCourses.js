const courses = JSON.parse(localStorage.getItem("courses"));

const table = document.getElementById("courses");

courses.forEach(course => {
    // Create a new row
    const row = document.createElement("tr");

    // Create cell for course code
    const code = document.createElement("td");
    code.textContent = course.code;
    row.appendChild(code);

    // Create cell for course title
    const title = document.createElement("td");
    title.textContent = course.title;
    row.appendChild(title);

    // Append row to table
    table.appendChild(row);
});