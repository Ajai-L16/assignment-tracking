import "../Styles/Tasks.css";

function Tasks() {
  return (
  <div className='tasks-container'>
    <h1 className='tasks-h1'>Tasks Page</h1>
    <div className="task-addButton"><button className='addButton'>Add Task</button></div>
    
    <div className='tasks-list'>
      <div className='task-item'>Task 1: Complete assignment</div>
    </div>
  </div>
  );
}
export default Tasks;
