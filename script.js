document.getElementById("addButton").addEventListener("click", function() {
    const todoInput = document.getElementById("todoInput");
    const todoText = todoInput.value.trim(); 
    
    if (todoText) {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = todoText;
        
        document.getElementById("todoList").appendChild(li);
        
        todoInput.value = "";
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
  