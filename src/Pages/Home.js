import React, { useEffect, useState } from "react";
import "../Styles/Home.css";

function Home() {
  const [assignmentData, setAssignmentData] = useState([]);

  useEffect(() => {
    fetch("/assignments.json")
      .then((res) => res.json())
      .then((data) => setAssignmentData(data))
      .catch((err) => console.error("Failed to load JSON:", err));
  }, []);

  return (
    <div className="home-container">
      <h1 className="home_h1">Home Page</h1>

      <div className="assignments-lists">
        {assignmentData.map((assignment) => (
          <div key={assignment.id} className="assignment-card">
            
            {/* Line 1: Header (Title Left, Meta Right) */}
            <div className="card-header">
              <div className="header-left">
                <h3>{assignment.title}</h3>
                <span className="subject-tag">{assignment.subject}</span>
              </div>
              
              <div className="header-right">
                <span className="due-date">Due: {assignment.dueDate}</span>
                <span className={`status-badge ${assignment.status.toLowerCase()}`}>
                  {assignment.status}
                </span>
              </div>
            </div>

            {/* Line 2: Description */}
            <div className="card-body">
              <p>{assignment.description}</p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;