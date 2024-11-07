const TodoList = document.querySelector(".to-do_list ul");
console.log(TodoList)

TodoList.addEventListener("click", (event) => {
    const deletedBtn = event.target.className;
    if (deletedBtn === "delete") {
        const liTag = event.target.parentNode;
        TodoList.removeChild(liTag);
    }
})

const MyTodoList = document.querySelector(".search-todo");
console.log(MyTodoList)

MyTodoList.addEventListener("k", (event) => {
    event.preventDefault();
    const inputValue = event.target.value;
    if (inputValue) {
        const search = "&query=" + inputValue.toLowerCase();
        console.log(search);
    }
})

const AddTodoList = document.querySelector(".add-todo");
console.log(AddTodoList)

AddTodoList.addEventListener()