let students = [];

function addStudent() {
    const name = document.getElementById('studentName').value;
    const percentage = parseFloat(document.getElementById('studentPercentage').value);

    if (name && !isNaN(percentage)) {
        students.push({ name, percentage });
        document.getElementById('studentName').value = '';
        document.getElementById('studentPercentage').value = '';
        displayStudents(students);
    } else {
        alert('Please enter valid name and percentage');
    }
}

function displayStudents(students) {
    const studentList = document.getElementById('studentList');
    studentList.innerHTML = '';

    students.forEach(student => {
        const studentDiv = document.createElement('div');
        studentDiv.textContent = `${student.name} - ${student.percentage}%`;
        studentList.appendChild(studentDiv);
    });
}

function sortByPercentage() {
    const sortedStudents = [...students].sort((a, b) => b.percentage - a.percentage);
    displayStudents(sortedStudents);
}

function sortByName() {
    const sortedStudents = [...students].sort((a, b) => a.name.localeCompare(b.name));
    displayStudents(sortedStudents);
}
