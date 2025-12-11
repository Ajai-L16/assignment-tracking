import React, { useEffect, useState } from "react";
import "../Styles/Home.css";

function Home() {
  const [assignmentData, setAssignmentData] = useState([]);

  useEffect(() => {
    fetch("/assignments.json")       // public folder -> root path
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
            <h3>{assignment.title}</h3>
            <p><strong>Subject:</strong> {assignment.subject}</p>
            <p>{assignment.description}</p>
            <p><strong>Due:</strong> {assignment.dueDate}</p>
            <p><strong>Status:</strong> {assignment.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
