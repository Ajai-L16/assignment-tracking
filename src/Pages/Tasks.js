import "../Styles/Tasks.css";
import React, { useEffect, useState } from "react";

function Tasks() {
  const [assignmentData, setAssignmentData]=useState([]);

  useEffect(() => {
    fetch("/assignments.json")
      .then((res) => res.json())
      .then((data) => setAssignmentData(data))
      .catch((err) => console.error("Failed to load JSON:", err));
  }, []);

  const taskCount = assignmentData.length;
  const pendingCount = assignmentData.filter((assignment) => assignment.status === "Pending").length;
  const inProgress = assignmentData.filter((assignment)=> assignment.status === "In Progress").length;
  const completedCount = assignmentData.filter((assignment) => assignment.status === "Completed").length;

  return (
    <div className='tasks-container'>
      <h1 className='tasks-h1'>Tasks Page</h1>
      
      <div className="task-addButton">
        <button className='addButton'>Add Task</button>
      </div>

      <div className="status-icons">
        <h4>Total Task:</h4>
        <h4>Pending:</h4>
        <h4>In Progress:</h4>
        <h4>Completed: </h4>
        <h4 className="tottask">{taskCount}</h4>
        <h4 className="pen">{pendingCount} </h4>
        <h4 className="inPro">{inProgress}</h4>
        <h4 className="com">{completedCount} </h4>
      </div>
      
      <div className='tasks-list'>
        {assignmentData.map((assignment) => (
          <div key={assignment.id} className="task-card">
            <h3>{assignment.title}</h3>
            <p><strong>Subject:</strong> {assignment.subject}</p>
            <p>{assignment.description}</p>
            <div className="task-meta">
              <p><strong>Due:</strong> {assignment.dueDate}</p>
              <p className={`status-text ${assignment.status.toLowerCase().replace(" ", "-")}`}>
                <strong>Status:</strong> {assignment.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks;