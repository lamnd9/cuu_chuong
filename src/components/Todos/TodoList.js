import React from "react";

import Todo from "./Todo";

function TodoList({ todos, deleteHandler, editHandler }) {
    return (
        <ul>
            {todos.map(todo => {
                return <Todo key={todo.id} todo={todo} deleteHandler={deleteHandler} editHandler={editHandler} />
            })}
        </ul>
    )
};

export default TodoList;