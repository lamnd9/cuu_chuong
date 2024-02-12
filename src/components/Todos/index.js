import React, { useState } from "react";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Todos() {

    const initialState = [
        { id: 1, value: 'task 1' },
        { id: 2, value: 'task 2' },
        { id: 3, value: 'task 3' },
    ]

    const [todoList, setTodoList] = useState(initialState);

    return (
        <>
            <TodoForm todos={todoList} setTodos={setTodoList} />
            <TodoList todos={todoList} />
        </>
    )
}

export default Todos;