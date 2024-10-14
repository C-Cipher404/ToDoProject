const lists = {
    1: { name: 'Shopping list', toDos: [] },
    2: { name: 'Honey do list', toDos: [] },
    3: { name: 'Workout routine', toDos: [] },
};

let currentList = lists[1]; 

const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const listsContainer = document.getElementById('lists');
const currentListName = document.getElementById('current-list-name');
const currentListToDos = document.getElementById('current-list-toDos');

addButton.addEventListener("click", addTodo);

function clearInput() {
    todoInput.value = '';
}

function addTodo() {
    const todoText = todoInput.value.trim(); 
    if (todoText) {
        currentList.toDos.push({ task: todoText, completed: false });
        clearInput();
        render();
    }
}

function toggleTodoCompletion(index) {
    currentList.toDos[index].completed = !currentList.toDos[index].completed;
    render();
}

function removeTodo(index) {
    currentList.toDos.splice(index, 1);
    render();
}

function markTodoAsCompleted(index) {
    currentList.toDos[index].completed = !currentList.toDos[index].completed;
    render();
}

function removeAllToDosCompleted() {
    currentList.toDos = currentList.toDos.filter(todo => !todo.completed);
    render();
}

function addList() {
    const listName = prompt("Enter the name of the new list:");
    if (listName) {
        const newListId = Object.keys(lists).length + 1;
        lists[newListId] = { name: listName, toDos: [] };
        currentList = lists[newListId]; 
        render();
    }
}

function removeList(listId) {
    if (confirm(`Are you sure you want to delete the list: ${lists[listId].name}?`)) {
        delete lists[listId];
        currentList = lists[Object.keys(lists)[0]] || null; 
        render();
    }
}

function render() {
    
    let listsHtml = '<ul class="list-group">';
    Object.keys(lists).forEach((key) => {
        listsHtml += `<li class="list-group-item">${lists[key].name}
                        <button onclick="removeList(${key})">Delete</button>
                      </li>`;
    });
    listsHtml += '</ul>';
    listsContainer.innerHTML = listsHtml;

    currentListName.innerText = currentList.name;

    let toDosHtml = '<ul class="list-group">';
    currentList.toDos.forEach((todo, index) => {
        toDosHtml += `
            <li class="list-group-item">
                <input type="checkbox" ${todo.completed ? 'checked' : ''} onclick="markTodoAsCompleted(${index})">
                ${todo.task}
                <button onclick="removeTodo(${index})">Delete</button>
            </li>`;
    });
    toDosHtml += '</ul>';
    currentListToDos.innerHTML = toDosHtml;
}
render();
