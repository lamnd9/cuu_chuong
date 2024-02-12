import React, { useState } from "react";

function TodoForm({ todos, setTodos }) {

    const initialState = {
        id: '',
        value: ''
    }

    const [todo, setTodo] = useState(initialState);

    const handleChange = e => {
        setTodo({
            id: Date.now(),
            value: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setTodos([todo, ...todos]);
        setTodo(initialState);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="todo"
                value={todo.value}
                placeholder="Please input your task"
                onChange={handleChange} />
            <button type="submit">Add</button>
        </form>
    )
};

export default TodoForm;