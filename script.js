document.getElementById("addButton").addEventListener("click", function() {
    const todoInput = document.getElementById("todoInput");
    const todoText = todoInput.value.trim(); 
    
    if (todoText) {
        currentList.toDos.push({ task: todoText, completed: false });
        todoInput.value = "";
        render();
    }
});

const lists = {
    1: { name: 'Shopping list', items: ['milk', 'bread', 'eggs'] },
    2: { name: 'Honey do list', items: ['clean garage', 'mow lawn'] },
    3: { name: 'Workout routine', items: ['push-ups', 'squats', 'planks'] }
};

const currentList = {
    name: "Shopping list",
    toDos: [
        { task: "Buy milk", completed: false },
        { task: "Buy eggs", completed: true },
        { task: "Buy bread", completed: false }
    ]
};
function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim(); 
    if (todoText) {
        currentList.toDos.push({ task: todoText, completed: false });
        todoInput.value = '';
        render();
    }
}
document.getElementById("addButton").addEventListener("click", addTodo);

function toggleTodoCompletion(index) {
    currentList.toDos[index].completed = !currentList.toDos[index].completed;
    render();
}

function render() {
    let listsHtml = '<ul class="list-group">';
    Object.keys(lists).forEach((key) => {
      listsHtml += `<li class="list-group-item">${lists[key].name}</li>`;
    });
    listsHtml += '</ul>';
    document.getElementById('lists').innerHTML = listsHtml;

    document.getElementById('current-list-name').innerText = currentList.name;

    let toDosHtml = '<ul class="list-group">';
    currentList.toDos.forEach((todo, index) => {
        toDosHtml += `
            <li class="list-group-item">
                <input type="checkbox" ${todo.completed ? 'checked' : ''} onclick="toggleTodoCompletion(${index})">
                ${todo.task}
            </li>`;
    });
    toDosHtml += '</ul>';
    document.getElementById('current-list-toDos').innerHTML = toDosHtml;
}

function addList() {
    const listName = prompt("Enter the name of the new list:");
    
    if (listName) {
        const newListId = Object.keys(lists).length + 1;
        lists[newListId] = {
            name: listName,
            toDos: []
        };
        currentList = lists[newListId]; 
        render();
    }
}
