let taskNameInput = document.querySelector("#task-name-input");
let addTaskButton = document.querySelector("#add-task-btn");
let startMessage = document.querySelector("#start-message");
let taskList = document.querySelector(".task-list");
addTaskButton.addEventListener("click", addTaskHandler);

taskNameInput.addEventListener("keydown", function (e) {
    if (e.code == "Enter") addTaskHandler();
})

function addTaskHandler() {
    if (taskNameInput.value) {
        if (!startMessage.hidden) startMessage.hidden = true;

        let newTask = new Task(taskNameInput.value);
        newTask.createIn(taskList);

        taskNameInput.value = "";
    } else {
        alert("введите имя задачи");
    }
}

function Task(text) {
    this.text = text;
    this.isDone = false;
    this.div = null;
}
Task.prototype.createIn = function (element) {
        this.div = document.createElement("div");
        this.div.classList.add("task");

        let input = document.createElement("input");
        input.addEventListener("click", () => this.changeState(this.div));
        input.type = "checkbox";

        let p = document.createElement("p");
        p.innerText = this.text;

        this.div.append(input);
        this.div.append(p);
        element.append(this.div);
    }
Task.prototype.changeState = function (element) {
        this.isDone = !this.isDone;
        element.classList.toggle("completed");
    }


    // let taskNameInput = document.querySelector("#task-name-input");
// let addTaskButton = document.querySelector("#add-task-btn");
// let startMessage = document.querySelector("#start-message");
// let taskList = document.querySelector(".task-list");

// addTaskButton.addEventListener("click", addTaskHandler);


// taskNameInput.addEventListener("keydown", Enter);
// function Enter(e) {
// if(e.code == "Enter") addTaskHandler();
// }

// function createTask(text) {
//     let div = document.createElement("div");
//     div.classList.add("task");

//     let input = document.createElement("input");
//     input.addEventListener("click", changeTaskState);
//     input.type = "checkbox";

//     let p = document.createElement("p");
//     p.innerText = text;

//     let btndel = document.createElement("button");
//     btndel.textContent = "Delete";
//     btndel.addEventListener("click", Delete);
//     btndel.classList.add("buttondel");

//     div.append(input);
//     div.append(p);
//     div.append(btndel);

   
//     return div;
// }



// function Delete() {
//         this.parentElement.remove();
//     }


// function changeTaskState() {
//     if (this.checked) {
//         this.parentElement.classList.add("completed");
//     } else { 
//         this.parentElement.classList.remove("completed");
//     }
// }

// function addTaskHandler() {
//     if (taskNameInput.value) {
//         if (!startMessage.hidden) startMessage.hidden = true;

//         let newTask = createTask(taskNameInput.value);
//         taskList.append(newTask);
//         taskNameInput.value = "";
      
//     } else { 
//         alert("введите имя задачи");
//     }
// }

