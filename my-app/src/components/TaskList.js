import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, toggleTask, deleteTask, updateTaskPriority }) {
  const priorityOrder = { high: 1, medium: 2, low: 3 };

  const sortedTasks = [...tasks].sort((a, b) => 
    priorityOrder[a.priority] - priorityOrder[b.priority]
  );

  return (
    <ul className="task-list">
      {sortedTasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          updateTaskPriority={updateTaskPriority}
        />
      ))}
    </ul>
  );
}

export default TaskList;