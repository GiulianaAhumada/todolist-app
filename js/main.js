const addButton = document.getElementById("add-button");
addButton.addEventListener("click", addToDoItem);

const toDoEntryBox = document.getElementById("todo-entry-box");
const toDoList = document.getElementById("todo-list");

function newToDoItem(itemText, completed) {
    const toDoItem = document.createElement("li");
    const toDoText = document.createTextNode(itemText);
    toDoItem.appendChild(toDoText);

    toDoList.appendChild(toDoItem);
    toDoItem.addEventListener("dblclick", toggleToDoItemState);
}

function addToDoItem() {
    const itemText = toDoEntryBox.value;
    newToDoItem(itemText, false);
}