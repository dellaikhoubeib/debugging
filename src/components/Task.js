const Task = ({ task }) => {
    return (
      <li>
        {task.description} - {task.completed ? 'Completed' : 'Pending'}
      </li>
    );
  };
  
  export default Task;
  