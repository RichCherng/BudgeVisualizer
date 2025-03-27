import { Component } from "react";
import { Todo, TodoStore } from "./TodoStore";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";


// Todo Class: Todo Container Component
interface TodoListProps {
    todos: Todo[];
}

// Todo List Component
class TodoList extends Component<TodoListProps> {

    toggleTodo = (id: string) => {
    }

    deleteTodo = (id: string) => {
    }

    render() {
        const { todos } = this.props;
        return (
            <ul>
                { todos.map( (todo, index) => (
                    <TodoItem 
                    key={index}
                    todo={todo} 
                    onToggle={this.toggleTodo}
                    onDelete={this.deleteTodo}/>
                ))
                }
            </ul>
        )
    }
}

// Todo Class: Todo Container Component
interface TodoContainerState {
    todos: Todo[];
}

class TodoContainer extends Component<{}, TodoContainerState> {
    // Create an instance of the TodoStore to encapsulate todo management logic.
    store: TodoStore; 


    constructor(props: {}) {
        super(props);
        this.store = new TodoStore();
        this.store.addTodo( new Todo("1", "Learn React") );
        this.store.addTodo( new Todo("2", "Learn React 2") );
        this.store.addTodo( new Todo("3", "Learn React 3") );
        this.store.addTodo( new Todo("4", "Learn React 4") );
        this.state = {
            todos: this.store.getTodos(),
        }
    }
    addTodo = (text: string) => {
        console.log(text);
        this.store.addTodo( new Todo( Math.random().toString(), text) );
        this.refresh();
    }
    render() {
        const { todos } = this.state;
        return (
        <div>
            <h1>Todo List</h1>
            <TodoForm onAdd={this.addTodo} />
            <TodoList 
                todos={todos}
            />
        </div>
    )
    }

    private refresh = () => {
        this.setState({ todos: this.store.getTodos() });
    }
}



export default TodoContainer;