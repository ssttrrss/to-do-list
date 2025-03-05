const tasks = [];

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;
    
    tasks.push({ text: taskText, completed: false });
    taskInput.value = "";
    renderTasks();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function renderTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    
    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.textContent = task.text;
        li.className = task.completed ? "completed" : "";
        
        li.onclick = () => toggleTask(index);
        
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.className = "delete-btn";
        deleteBtn.onclick = (event) => {
            event.stopPropagation();
            deleteTask(index);
        };
        
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

document.getElementById("addTaskBtn").onclick = addTask;
