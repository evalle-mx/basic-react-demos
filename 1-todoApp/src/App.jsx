import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState("");

  const addTask = () => {
    if (inputTask.trim() !== "") {
      setTasks([...tasks, inputTask.trim()]);
      setInputTask("");
    }
  };

  const delTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <>
      <div className="app">
        <h1>TO-DO App</h1>
        <div className="input-container">
          <input
            type="text"
            value={inputTask}
            placeholder="Add a new task..."
            onChange={(event) => setInputTask(event.target.value)}
          />
          <button onClick={addTask}>Add Task</button>
        </div>
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className="task-item">
              {task}
              <button className="delete-button" onClick={() => delTask(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
