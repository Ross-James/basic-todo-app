// Global variables
const userInput = document.getElementById('userInput');
const taskList = document.getElementById('taskList');
const taskCounter = document.getElementById('taskCount');

let counter = 0;

// Get the users input
function getUserInput(){
    const value = userInput.value;
    if (value !== ""){
        displayTask(value);
        userInput.value = '';
        updateTaskCounter(1);
    } else {
        alert('Please enter a new task!');
    }
};

// Display users input
function displayTask(userVal){
    const taskItem = document.createElement('div');
    const taskName = document.createElement('p');
    const taskRemoveBtn = document.createElement('button');

    taskRemoveBtn.textContent = "delete";
    taskRemoveBtn.classList.add("material-symbols-outlined");

    taskName.textContent = userVal;

    taskItem.appendChild(taskName);
    taskItem.appendChild(taskRemoveBtn);
    taskItem.classList.add('task-item');

    taskList.append(taskItem);
    removeSingleTask(taskItem);
};

// Remove a single task
function removeSingleTask(taskItem){
    taskItem.querySelector('button').addEventListener('click', () => {
        taskItem.remove();
        updateTaskCounter(-1);
    });
}

// Remove all tasks
function removeAllTasks(){
    taskList.innerHTML = '';
    updateTaskCounter(-counter);
};

// Update task counter
function updateTaskCounter(change){
    counter += change;
    taskCounter.textContent = counter;
};



