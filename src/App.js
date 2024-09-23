import React, { useState } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, description: 'Task One', completed: false },
    { id: 2, description: 'Task Two', completed: true },
  ]);

  return (
    <div className="App">
      <Header title="Task Manager" />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;

