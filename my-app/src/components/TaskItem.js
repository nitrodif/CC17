import React from 'react';

function TaskItem({ task }) {
  return (
    <li className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => 
      <span>{task.title}</span>
      <button onClick={() => 
        Delete
      </button>
    </li>
  );
}

export default TaskItem;