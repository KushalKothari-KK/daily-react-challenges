// Implement a simple to-do list application with add and remove functionality

import React, { useState } from "react";

const SimpleTodo = () => {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleSubmitTodo = () => {
    setTodoList([
      ...todoList,
      {
        id: Date.now(),
        name: inputValue,
      },
    ]);
    setInputValue("");
  };
  const handleRemoveTodo = (id) => {
    const filteredArray = todoList.filter((todo) => todo.id !== id);
    setTodoList(filteredArray);
  };
  return (
    <div>
      <h1>Todo List</h1>
      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          value={inputValue}
          placeholder="Enter todo"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleSubmitTodo}>Add Todo</button>
      </div>
      <div>
        {todoList
          ? todoList.map((todo) => (
              <div
                key={todo?.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <div>{todo?.name}</div>
                <button onClick={() => handleRemoveTodo(todo?.id)}>
                  Delete Todo
                </button>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default SimpleTodo;
