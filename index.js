const inputToDo = $('#inputToDo');
const btnAdd = $('#btnAdd');
const toDoContainer = $('#todo');

// add a to item
function addToDoItem(message) {
    item = '<li>' + message + '</li>';
    toDoContainer.append(item);
}