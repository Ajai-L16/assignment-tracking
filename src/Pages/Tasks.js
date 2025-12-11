import "../Styles/Tasks.css";
import React, { useEffect, useState } from "react";

function Tasks() {

  const [assignmentData, setAssignmentData] = useState([]);
  
    useEffect(() => {
      fetch("/assignments.json")
        .then((res) => res.json())
        .then((data) => setAssignmentData(data))
        .catch((err) => console.error("Failed to load JSON:", err));
    }, []);
  
    const pendingCount =assignmentData.filter((assignment)=>assignment.status === "Pending").length;
    const completedCount =assignmentData.filter((assignment)=>assignment.status === "Completed").length;


  return (
  <div className='tasks-container'>
    <h1 className='tasks-h1'>Tasks Page</h1>
    <div className="task-addButton"><button className='addButton'>Add Task</button></div>

    <div className="status-icons">
      <h4>pending: </h4>
      <h4>completed: </h4>
      <h4 className="pen">{pendingCount} </h4>
      <h4 className="com">{completedCount} </h4>
    </div>
    
    <div className='tasks-list'>

    </div>
  </div>
  );
}
export default Tasks;
