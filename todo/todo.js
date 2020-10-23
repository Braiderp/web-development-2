class Todo {
     constructor(data){
         const {key, listSelector, inputSelector}= data;
        let todos = this._getTodos(key);
        this.key = key;
        this.listSelector = document.querySelector(listSelector);
        this.inputSelector = document.querySelector(inputSelector);
        this.list = todos;
        if(this.list.length){
            this._buildList(todos);
        }
    }
     _getTodos (key){
         let k = key || this.key;
        let todos;    
        if(localStorage.getItem(k) === null){
            todos = [];
        } else {
            todos = JSON.parse(localStorage.getItem(k));
        }
        return todos;
    }
    _buildList(todos){
        const vm = this;
        todos.forEach(todo => {
            vm.addToDo(todo);
        });
    }
  _saveTodos(todo){
        let todos = this.list;
        todos.push(todo);
        localStorage.setItem(this.key, JSON.stringify(todos));
    }
     addToDo(item){
         const vm = this;
        let message;
        if(item && item.message){
            message = item.message;
        } else {
            message = this.inputSelector.value;
        }
        if(message){
        const todoDiv = document.createElement("div");
        todoDiv.classList.add('todo');
        const newTodo = document.createElement("li");
        newTodo.innerText = message;
        newTodo.classList.add("todo-item");
        if(item && item.completed){
            todoDiv.classList.add("completed");
        }
        todoDiv.appendChild(newTodo);
        
        //completed button
        const completedButton = document.createElement("button");
        completedButton.addEventListener("click", function(){
            vm._toggleCompleted(completedButton);
        });
        completedButton.innerHTML = "<i class='fas fa-check'/>";
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);
        
        // trash btn 
        const trashButton = document.createElement("button");
        trashButton.addEventListener("click", function(){
            vm._deleteTodo(trashButton);
        });
        trashButton.innerHTML = "<i class='fas fa-trash'/>";
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);
    
        //append to list 
        this.listSelector.appendChild(todoDiv);
        if(!item){
            this._saveTodos({ message, completed: false});
            this.inputSelector.value ="";    
        }
    }
    }
    filterCategories(category){ 
        const todos = this.listSelector.childNodes;
        todos.forEach(todo => {
            switch(category) {
                case "all":
                    todo.style.display = "flex";
                    break;
                case "completed":
                    if(todo.classList.contains("completed")){
                        todo.style.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
                    break;
                case "uncompleted":
                    if(!todo.classList.contains("completed")){
                        todo.style.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
                    break;
            }
            
        });
    }
   _toggleCompleted(el){
       const todos = this.list;
        el.parentElement.classList.toggle('completed');
        const todo = el.parentElement;
        let todoText = todo.children[0].innerText;     
        let index;
        for(let i =0; i<todos.length; i++){
            if(todos[i].message === todoText){
                index = i;
                break;
            }
        }
        todos[index].completed = !todos[index].completed;
        localStorage.setItem(this.key, JSON.stringify(todos));
    }
     _deleteTodo(el){
        const todo = el.parentElement;
        const todos = this.list;
        console.log(todos);
        const todoIndex = todo.children[0].innerText;
        todos.splice(todos.indexOf(todoIndex), 1);
        localStorage.setItem(this.key, JSON.stringify(todos));
        todo.classList.add("fall");
        todo.addEventListener('transitionend', () => {
            todo.remove();
        });
    
    }
}