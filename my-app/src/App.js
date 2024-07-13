import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import MotivationalText from './components/MotivationalText';
import AddTaskForm from './components/AddTaskForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [motivationalText, setMotivationalText] = useState('');

  // We'll add more functionality here in the next steps

  return (
    <div className="App">
      <h1>Task Management & Motivation App</h1>
      <MotivationalText text={motivationalText} />
      <AddTaskForm />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;