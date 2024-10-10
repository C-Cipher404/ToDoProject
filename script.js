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