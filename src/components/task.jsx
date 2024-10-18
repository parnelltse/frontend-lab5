import React from "react";

const Task = ({ task, toggleTask, deleteTask }) => {
  return (
    <div
      className="task"
      style={{ textDecoration: task.completed ? "line-through" : "none" }}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <span>{task.text}</span>
      <button className="deletebutton" onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
