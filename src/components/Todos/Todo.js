import React, { useState } from "react";

function Todo({ todo, deleteHandler, editHandler }) {

    const [isEditing, setIsEditing] = useState(false)

    const [todoEdit, setTodoEdit] = useState();

    const handleChangeTodoEdit = e => {
        setTodoEdit({
            id: todo.id,
            value: e.target.value
        })
    }

    const handleSubmitTodoEdit = (input, e) => {
        // submit
        e.preventDefault();
        editHandler(input);
        setIsEditing(false);
    }

    return (
        <li>
            {isEditing
                ? <form onSubmit={e => handleSubmitTodoEdit(todoEdit, e)}>
                    <input
                        type="text"
                        defaultValue={todo.value}
                        onChange={handleChangeTodoEdit} />
                    <button type="submit">Edit</button>
                </form>
                : <p onDoubleClick={() => setIsEditing(true)}>
                    {todo.value}
                    <button onClick={() => deleteHandler(todo.id)} >x</button>
                </p>}

        </li>
    )
};

export default Todo;