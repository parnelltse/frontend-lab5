import React, { useState } from 'react';
import Task from './components/task';
import TaskForm from './components/TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);
  
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

  const remainingTasksCount = tasks.filter(task => !task.completed).length;

  return (
    <div className="app">
      <h1>Daily Planner</h1>
      <TaskForm addTask={addTask} />
      <h2>Remaining tasks: {remainingTasksCount}</h2>
      <div className="task-list">
        {tasks.map(task => (
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
