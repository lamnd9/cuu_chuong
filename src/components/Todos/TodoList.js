import React from "react";

import Todo from "./Todo";

const todos = [
    { 'id': 1, 'value': 'task 1' },
    { 'id': 2, 'value': 'task 2' },
    { 'id': 3, 'value': 'task 3' },
]

function TodoList() {
    return (
        <ul>
            {todos.map(todo => {
                return <Todo key={todo.id} todo={todo} />
            })}
        </ul>
    )
};

export default TodoList;