import React, { useState, useEffect } from 'react';
import TaskList from './components/./TaskList';
import MotivationalText from './components/./MotivationalText';
import AddTaskForm from './components/./addtaskform';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [motivationalText, setMotivationalText] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    updateMotivationalText();
  }, [tasks]);

  const addTask = (title, priority) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
      priority: priority || 'medium', // default to medium if not specified
    };
    setTasks([...tasks, newTask]);
  };
  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const updateTaskPriority = (id, priority) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, priority } : task
    ));
  };


  return (
    <div className="App">
      <h1>Task Management & Motivation App</h1>
      <MotivationalText text={motivationalText} />
      <AddTaskForm addTask={addTask} />
      <TaskList 
        tasks={tasks} 
        toggleTask={toggleTask} 
        deleteTask={deleteTask} 
        updateTaskPriority={updateTaskPriority}
      />
    </div>
  );
}

export default App;