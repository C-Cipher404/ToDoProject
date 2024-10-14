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

function render() {
    let listsHtml = '<ul class="list-group">';
    Object.keys(lists).forEach((key) => {
      listsHtml += `<li class="list-group-item">${lists[key].name}</li>`;
    });
    listsHtml += '</ul>';
    document.getElementById('lists').innerHTML = listsHtml;
    document.getElementById('current-list-name').innerText = currentList.name;
    let toDosHtml = '<ul class="list-group-flush">';
    currentList.toDos.forEach((todo) => {
      toDosHtml += `<li class="list-group-item">${todo.task}</li>`;
    });
    toDosHtml += '</ul>';
    document.getElementById('current-list-toDos').innerHTML = toDosHtml;
}
render();
