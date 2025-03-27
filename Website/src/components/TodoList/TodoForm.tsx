import { Component } from "react";

interface TodoFormProps {
    onAdd: (text: string) => void;
}

interface TodoFormState {
    text: string;
}

class TodoForm extends Component<TodoFormProps, TodoFormState> {
    state: TodoFormState = { text: '' };

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ text: event.target.value });
    }
    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (this.state.text.trim()) {
            this.props.onAdd(this.state.text);
            this.setState({ text: '' });
        }
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    value={this.state.text}
                    onChange={ this.handleChange}
                    placeholder="Add a new todo"
                />
                <button type="submit">Add</button>
            </form>
        )
    }
}

export default TodoForm;