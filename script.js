const lists = {
    1: { name: 'Urgent', toDos: [] },
    2: { name: 'Weekly', toDos: [] },
    3: { name: 'Not Important', toDos: [] }
};

let currentList = {
    name: "To Do List",
    toDos: [
        { task: "Exercise", completed: false },
        { task: "Workout", completed: true },
        { task: "Shopping", completed: false }
    ]
};

document.getElementById("addButton").addEventListener("click", addTodo);

function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();

    if (todoText) {
        currentList.toDos.push({ task: todoText, completed: false });
        todoInput.value = '';
        render();
    }
}

function render() {
    let toDosHtml = '<ul class="list-group">';
    if (currentList.toDos.length === 0) {
        toDosHtml += '<li class="list-group-item">No toDos available</li>';
    } else {
        currentList.toDos.forEach((todo, index) => {
            toDosHtml += `
                <li class="list-group-item animate__animated animate__fadeIn">
                    <input type="checkbox" ${todo.completed ? 'checked' : ''} onclick="markTodoAsCompleted(${index})">
                    ${todo.task}
                    <button onclick="removeTodo(${index})" class="btn btn-danger btn-sm">Delete</button>
                </li>`;
        });
    }
    toDosHtml += '</ul>';
    document.getElementById('current-list-toDos').innerHTML = toDosHtml;

    document.getElementById('current-list-name').innerText = currentList.name;

    let listsHtml = '<ul class="list-group">';
    Object.keys(lists).forEach((key) => {
        listsHtml += `
            <li class="list-group-item">
                ${lists[key].name}
                <button onclick="removeList(${key})" class="btn btn-danger btn-sm">Delete</button>
            </li>`;
    });
    listsHtml += '</ul>';
    document.getElementById('lists').innerHTML = listsHtml;
}

function removeList(listId) {
    delete lists[listId];
    render(); 
}

function removeTodo(todoIndex) {
    currentList.toDos.splice(todoIndex, 1); 
    render(); 
}

function markTodoAsCompleted(todoIndex) {
    currentList.toDos[todoIndex].completed = !currentList.toDos[todoIndex].completed; 
    render();
}

function addList() {
    const listName = document.getElementById('new-list-name-input').value.trim();
    if (listName) {
        const newListId = Object.keys(lists).length + 1; 
        lists[newListId] = { name: listName, toDos: [] }; 
        document.getElementById('new-list-name-input').value = ''; 
        render(); 
    } else {
        alert('Please enter a valid list name.');
    }
}
render();

