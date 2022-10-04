let taskNameInput = document.querySelector("#task-name-input");
let addTaskButton = document.querySelector("#add-task-btn");
let startMessage = document.querySelector("#start-message");
let taskList = document.querySelector(".task-list");
let clearAllButton = document.querySelector(".clearAllButton");
let allTasksButton = document.querySelector(".allTasksButton");
let uncompletedTasksButton = document.querySelector(".uncompletedTasksButton");

let tasks = [];

addTaskButton.addEventListener("click", addTaskHandler);
clearAllButton.addEventListener("click", ClearTasks);
allTasksButton.addEventListener("click", showAllTasks);
uncompletedTasksButton.addEventListener("click", showUncompletedTasks);

function showAllTasks () {
    taskList.innerHTML = "";
    tasks.forEach(function (task) {
        task.createIn(taskList);
    })
}

function showUncompletedTasks () {
    taskList.innerHTML = "";

    tasks
        .filter(task => task.isDone == false)
        .forEach(task => {
            task.createIn(taskList);
        });
}

taskNameInput.addEventListener("keydown", function (e) {
    if (e.code == "Enter") addTaskHandler();
})

function addTaskHandler() {
    if (taskNameInput.value) {
        if (!startMessage.hidden) startMessage.hidden = true;

        let newTask = new Task(taskNameInput.value);
        newTask.createIn(taskList);
        tasks.push(newTask);

        taskNameInput.value = "";
    } else {
        alert("введите имя задачи");
    }
}

function ClearTasks() {
    taskList.innerHTML = "";
}

class Task {
    constructor(text) {
        this.text = text;
        this.isDone = false;
        this.div = null;
    }

    createIn(element) {
        this.div = document.createElement("div");
        this.div.classList.add("task");

        let input = document.createElement("input");
        input.addEventListener("click", () => this.changeState(this.div));
        input.type = "checkbox";

        let p = document.createElement("p");
        p.innerText = this.text;

        this.div.append(input);
        this.div.append(p);

        if(this.isDone) {
            this.div.classList.add("completed");
            input.checked = true;
        }
        element.append(this.div);
    }

    changeState(element) {
        this.isDone = !this.isDone;
        element.classList.toggle("completed");
    }
}
