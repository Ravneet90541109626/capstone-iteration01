
import React from 'react';
import Task from './Task';
import './TaskList.css';  // Import CSS for TaskList component

function TaskList() {
  const tasks = [
    { id: 1, title: 'Task 1' },
    { id: 2, title: 'Task 2' },
    { id: 3, title: 'Task 3' },
    { id: 4, title: 'Task 4' },
    { id: 5, title: 'Task 5' }
  ];

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
