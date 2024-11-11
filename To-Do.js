document.addEventListener('DOMContentLoaded', loadFromStorage);


const TodoList = document.querySelector(".to-do_list ul");
console.log(TodoList)

TodoList.addEventListener("click", (event) => {
    const deletedBtn = event.target.className;
    if (deletedBtn === "delete") {
        const Del = event.target.parentNode;
        const activeName = Del.querySelector(".list").textContent;

        TodoList.removeChild(Del);
        deleteNewInput(activeName);
        console.log(`Deleted: ${activeName}`);
    }
});



const MyTodoList = document.querySelector(".search-todo");
console.log(MyTodoList)

MyTodoList.addEventListener("search", (event) => {
    const searchInputValue = event.target.value.toLowerCase();
    const items = todoList.getElementsByTagName("li");
    Array.from(items).forEach(item => {
        const itemNameTag = item.querySelector(".name").textContent.toLowerCase();
        if (itemNameTag.includes(searchInputValue)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});



const AddTodoList = document.querySelector(".add-todo");
console.log(AddTodoList)

AddTodoList.addEventListener("submit", (event) => {
    event.preventDefault();
    const newInputValue = AddTodoList.querySelector("input[type = 'text']").value.trim();
    if (newInputValue) {
        addNewInput(newInputValue);
        saveNewInput(newInputValue);
        AddTodoList.reset();
    }
    else{
        window.alert('kindly enter a to do item to save on your list');
    }
});



function addNewInput(activateToDo){
    const listItem = document.createElement("li");
    const activeSpan = document.createElement("span");
    activeSpan.textContent = activateToDo;
    activeSpan.className = "name";

    const deleteSpan = document.createElement("span");
    deleteSpan.textContent = "delete";
    deleteSpan.className = "delete";

    listItem.appendChild(activeSpan);
    listItem.appendChild(deleteSpan);
    toDoList.prepend(listItem);
}

function saveNewInput(activateToDo){
    const todoList = JSON.parse(localStorage.getItem("to-do_list")) || [];
    todoList.push(activateToDo);
    localStorage.setItem("todoList", JSON.stringify(todoList))
}

function loadFromStorage() {
    const todoList = JSON.parse(localStorage.getItem("to-do_list")) || [];
    todoList.forEach(addNewInput);
}

function deleteNewInput(activateToDo){
    let todoList = JSON.parse(localStorage.getItem("to-do_list")) || [];
    todoList = todoList.filter((item) => item !== activateToDo);
    localStorage.setItem("todoList", JSON.stringify(todoList))
}