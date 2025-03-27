
/* ----------------------------
   Store Classes
-------------------------------*/
class TodoStore {
    private todos: Todo[] = [];

    getTodos(): Todo[] {
        return this.todos;
    }

    addTodo(todo: Todo): void {
        this.todos.push(todo);
    }
}

/* ----------------------------
   Model Classes
-------------------------------*/
class Todo {
    id: string;
    text: string;
    completed: boolean;

    constructor(id: string, text: string) {
        this.id = id;
        this.text = text;
        this.completed = false;
    }
}

export { TodoStore, Todo };