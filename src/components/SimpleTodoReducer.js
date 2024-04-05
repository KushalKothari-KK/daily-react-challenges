import { useReducer, useState } from "react";

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        { id: Date.now(), text: action.payload, isCompleted: false },
      ];
    case "REMOVE_TASK":
      return state.filter((task) => task.id !== action.payload);
    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      );
    default:
      return state;
  }
};

export const SimpleTodoReducer = () => {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [taskData, setTaskData] = useState("");

  const addTask = () => {
    dispatch({ type: "ADD_TASK", payload: taskData });
    setTaskData("");
  };
  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        name="task"
        value={taskData}
        onChange={(e) => setTaskData(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
      <div>
        <ul style={{ padding: 0 }}>
          {tasks.map((task) => (
            <li key={task.id} style={{ display: "flex", gap: "8px" }}>
              <span
                onClick={() =>
                  dispatch({ type: "TOGGLE_TASK", payload: task.id })
                }
                style={{
                  textDecoration: task.isCompleted ? "line-through" : "none",
                }}
              >
                {task.text}
              </span>
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_TASK", payload: task.id })
                }
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
