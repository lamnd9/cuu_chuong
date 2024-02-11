import React from "react";

function Todo(props) {
    return (
        <li>{props.todo.value}</li>
    )
};

export default Todo;