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

    const deleteHandler = id => {
        const newTodoList = todoList.filter((todo) => todo.id !== id);
        setTodoList(newTodoList);
    }

    const editHandler = todoEdit => {
        setTodoList(
            todoList.map(todo => {
                if (todo.id === todoEdit.id) {
                    return {
                        ...todo,
                        value: todoEdit.value
                    }
                } else {
                    return todo;
                }
            })
        );
    }


    return (
        <>
            <TodoForm todos={todoList} setTodos={setTodoList} />
            <TodoList todos={todoList} deleteHandler={deleteHandler} editHandler={editHandler} />
        </>
    )
}

export default Todos;