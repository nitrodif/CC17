import React from 'react';

function TaskStats({ tasks }) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const completionRate = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <div className="task-stats">
      <h2>Task Statistics</h2>
      <p>Total Tasks: {totalTasks}</p>
      <p>Completed Tasks: {completedTasks}</p>
      <p>Completion Rate: {completionRate.toFixed(2)}%</p>
      <div className="progress-bar">
        <div 
          className="progress" 
          style={{ width: `${completionRate}%` }}
        ></div>
      </div>
    </div>
  );
}

export default TaskStats;