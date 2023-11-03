// Function to add a new task
function addTask() {
    const taskText = document.getElementById('newTask').value;
    if (taskText.trim() !== '') {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        li.innerHTML = '${tasktest}<button onclick="editTask(this)">Edit</button><button onclick="deleteTask(this)">Delete</button';
        taskList.appendChild(li);
        saveTasks();
        document.getElementById('newTask').value = '';
    }
}

// Function to edit a task
function editTask(element) {
    const newText = prompt('Edit task:', element.parentElement.firstChild.textContent);
    if (newText !== null && newText.trim() !== '') {
        element.parentElement.firstChild.textContent = newText;
        saveTasks();
    }
}

// Function to delete a task
function deleteTask(element) {
    element.parentElement.remove();
    saveTasks();
}

// Function to save tasks to local storage
function saveTasks() {
    const taskList = document.getElementById('taskList').innerHTML;
    localStorage.setItem('taskList', taskList);
}

// Function to load tasks from local storage
function loadTasks() {
    const taskList = localStorage.getItem('taskList');
    if (taskList !== null) {
        document.getElementById('taskList').innerHTML = taskList;
    }
}

// Load tasks when the page is loaded
window.onload = loadTasks;