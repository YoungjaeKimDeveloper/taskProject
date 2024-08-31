import React from "react";
import "./Sidebar.css";

const Sidebar = ({ handleTaskPage }) => {
  return (
    <div className="sideBar">
      <div className="sideBar-top">
        <h1>Your Projects</h1>
        <button onClick={handleTaskPage}>+Add Project</button>
      </div>
    </div>
  );
};

export default Sidebar;
