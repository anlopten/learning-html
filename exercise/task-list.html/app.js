// Elementos importantes
const inputId = document.getElementById("input-id");
const taskList = document.getElementById("task-list");
const btnAdd = document.getElementById("btn-add");

//Clase tarea

class Task{
    constructor(id,text,isCompleted = false){
        this.id = id;
        this.text = text;
        this.isCompleted = isCompleted;
        this.element = null;
        this.createElement()
    }
    createElement(){
        let li = document.createElement("li");
        li.className = "task-item";
        li.innerHTML = `<div class="task-container">
                            <button class="btn-check">✓</button>
                            <span class="task-name">${this.text}</span>
                        </div>
                            <button class="btn-delete">🗑️</button>`
        this.element = li;
    }
}

//Añadir tareas

function addTask(){
    const id = new Date().getTime(); //Esto se puede hacer en la creacion de la task
    const taskText = inputId.value.trim();
    const taskToAdd = new Task(id, taskText);
    taskList.prepend(taskToAdd.element); // prepend añade encima de los elementos que ya existan
    inputId.value="";
}

