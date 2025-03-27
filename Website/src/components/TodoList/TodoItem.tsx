import { Component } from "react";
import { Todo } from "./TodoStore";

/* ----------------------------
   React Components
-------------------------------*/


interface TodoItemProps {
    todo: Todo;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

class TodoItem extends Component<TodoItemProps> {
    render() {
        const { todo, onToggle, onDelete } = this.props;
        return (
            <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} >
                <span onClick={ () => onToggle(todo.id)}>{todo.text}</span>
                <button 
                onClick={ () => onDelete(todo.id) }
                style={{ marginLeft: '8px' }}>
                    Delete
                </button>
            </li>
        )
    }
}

export default TodoItem;