import React from "react";
import "./App.css"; // Import your CSS file
import "typeface-nunito"; // in your index.js or App.js

function DatingApp() {
  const userData = {
    name: "Pritam",
    department: "Pritam Engg",
    year: "2023",
  };

  const totalSubmissions = 15;
  const acceptanceCount = 10;
  const rejectionCount = 5;

  return (
    <div className="dating-app">
      <div className="column">
        <h2>User Information</h2>
        <p className="details">Name: {userData.name}</p>
        <p className="details">Department: {userData.department}</p>
        <p className="details">Year: {userData.year}</p>
      </div>

      <div className="column">
        <h2>Total Submissions</h2>
        <div className="total-submissions">
          <div className="count-container">
            <p className="number">{totalSubmissions}</p>
            <img src="/penguin_2.jpeg" alt="Image" className="custom-image" />
            <div className="hover-text">View for names</div>
          </div>
          <br></br>
          <br></br>
          <div className="add-more">
            <p className="details">Want to add more names?</p>
            <button>Click here</button>
          </div>
        </div>
      </div>

      <div className="column">
        <div className="acceptance-section">
          <h2>Matches !</h2>
          <div className="count-container">
            <p className="number">{acceptanceCount}</p>
            <img
              src="/smiley.webp"
              alt="Acceptance"
              className="acceptance-image"
            />{" "}
            {/* Acceptance image */}
          </div>
        </div>

        <div className="rejection-section">
          <h2>Rejections</h2>
          <div className="count-container">
            <p className="number"> {rejectionCount}</p>
            <img
              src="/sad.jpg"
              alt="Rejection"
              className="rejection-image"
            />{" "}
            {/* Rejection image */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DatingApp;
