import React, { useState } from 'react';
import Task from './components/Task';
import TaskForm from './components/TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const remainingTasks = tasks.filter(task => task.id !== id);
    setTasks(remainingTasks);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const remainingTasksCount = tasks.filter(task => !task.completed).length;
  const filteredTasks = tasks.filter(task => 
    filter === "All" || 
    (filter === "Completed" && task.completed) || 
    (filter === "Pending" && !task.completed)
  );

  return (
    <div className="app">
      <h1>Daily Planner</h1>
      <TaskForm addTask={addTask} />
      <h2>Remaining tasks: {remainingTasksCount}</h2>

      <div>
        <button onClick={() => handleFilterChange("All")}>All</button>
        <button onClick={() => handleFilterChange("Pending")}>Pending</button>
        <button onClick={() => handleFilterChange("Completed")}>Completed</button>
      </div>

      <div className="task-list">
        {filteredTasks.map(task => (
          <Task 
            key={task.id} 
            task={task} 
            toggleTask={toggleTask} 
            deleteTask={deleteTask} 
          />
        ))}
      </div>
    </div>
  );
};

export default App;
