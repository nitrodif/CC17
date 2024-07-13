import React from 'react';

function TaskItem({ task, toggleTask, deleteTask, updateTaskPriority }) {
  const priorityColors = {
    low: '#4CAF50',
    medium: '#FFC107',
    high: '#F44336'
  };

  return (
    <li className="task-item" style={{ borderLeft: `5px solid ${priorityColors[task.priority]}` }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </span>
      <select
        value={task.priority}
        onChange={(e) => updateTaskPriority(task.id, e.target.value)}
        className="priority-select"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default TaskItem;