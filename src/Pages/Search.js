import { useState, useEffect } from "react";
import "../Styles/Search.css";

function Search() {
  const [assignments, setAssignments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAssignments, setFilteredAssignments] = useState([]);

  useEffect(() => {
    fetch("/assignments.json")
      .then((res) => res.json())
      .then((data) => {
        setAssignments(data);
        setFilteredAssignments(data);
      })
      .catch((err) => console.error("Failed to load assignments:", err));
  }, []);

  useEffect(() => {
    const filtered = assignments.filter((assignment) =>
      assignment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      assignment.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      assignment.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredAssignments(filtered);
  }, [searchTerm, assignments]);

  const totalCount = assignments.length;
  const pendingCount = assignments.filter(a => a.status === "Pending").length;
  const inProgressCount = assignments.filter(a => a.status === "In Progress").length;
  const completedCount = assignments.filter(a => a.status === "Completed").length;

  return (
    <div className="search-container">
      <h1 className="search-h1">Search Assignments</h1>
      
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Search by title, subject, or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="status-icons">
        <h4>Total:</h4>
        <h4>Pending:</h4>
        <h4>In Progress:</h4>
        <h4>Completed:</h4>
        <h4 className="tottask">{totalCount}</h4>
        <h4 className="pen">{pendingCount}</h4>
        <h4 className="inPro">{inProgressCount}</h4>
        <h4 className="com">{completedCount}</h4>
      </div>

      <div className="search-results">
        <p className="results-count">{filteredAssignments.length} result(s) found</p>
        <div className="search-list">
          {filteredAssignments.map((assignment) => (
            <div key={assignment.id} className="search-card">
              <h3>{assignment.title}</h3>
              <p><strong>Subject:</strong> {assignment.subject}</p>
              <p>{assignment.description}</p>
              <div className="search-meta">
                <p><strong>Due:</strong> {assignment.dueDate}</p>
                <p className={`status-text ${assignment.status.toLowerCase().replace(" ", "-")}`}>
                  <strong>Status:</strong> {assignment.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Search;
