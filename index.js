const inputToDo = $('#inputToDo');
const btnAdd = $('#btnAdd');
const toDoContainer = $('#todo');
const inprogressContainer = $('#inprogress');

let lastId = 0;
let toDosList = [];
let inProgressList = [];


btnAdd.click(onAddClick);

function onAddClick(event) {
    console.log('add clicked');
    const value = inputToDo.val();
    addToDoItem(value);
}

// add a to item
function addToDoItem(message) {
    let newItem = {
        id: lastId,
        message: message
    };
    toDosList.push(newItem);
    lastId++;

    addLi(newItem, toDoContainer, 'Start Task');
    
    console.log(toDosList);
}

function addLi(newItem, container, buttonText) {
    const liItem = '<li id="' + newItem.id + '">' + newItem.message +
        '<button class="btn btn-info ml-2" onclick="startTask(' + newItem.id + ')">' + buttonText + '</button>'
        + '</li>';
    container.append(liItem);
}

// start the task
function startTask(id) {
    console.log('start stask clicked');
    console.log(id);

    $('#' + id).remove();

    let toDoItem = toDosList.find(
        function (item) { return item.id === id });
    
    addLi(toDoItem, inprogressContainer, 'Done');

    inProgressList.push(toDoItem);

    console.log('in progess', inProgressList);
}