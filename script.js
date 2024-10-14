document.getElementById("addButton").addEventListener("click", addTodo);

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

function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim(); 
    
    if (todoText) {
        currentLists.toDos.push({ task: todoText, completed: false });
        todoInput.value = '';
        render();
    }
}

function render() {
    let listsHtml = '<ul class="list-group">';
    Object.keys(lists).forEach((key) => {
        listsHtml += `<li class="list-group-item">${lists[key].name}
                        <button onclick="removeList(${key})" class="btn btn-danger btn-sm">Delete</button>
                      </li>`;
    });
    listsHtml += '</ul>';
    document.getElementById('lists').innerHTML = listsHtml;

    document.getElementById('current-list-name').innerText = currentLists.name;

    let toDosHtml = '<ul class="list-group">';
    currentList.toDos.forEach((todo, index) => {
        toDosHtml += `
            <li class="list-group-item">
                <input type="checkbox" ${todo.completed ? 'checked' : ''} onclick="markTodoAsCompleted(${index})">
                ${todo.task}
                <button onclick="removeTodo(${index})" class="btn btn-danger btn-sm">Delete</button>
            </li>`;
    });
    toDosHtml += '</ul>';
    document.getElementById('current-list-toDos').innerHTML = toDosHtml;
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
render();
