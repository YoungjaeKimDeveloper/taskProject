import React from "react";
import "./Main.css";
import noProject from "../assets/no-projects.png";
const Main = ({ handleTaskPage }) => {
  return (
    <div className="mainContent">
      <img src={noProject} alt="no-project" className="mainContent-img" />
      <p>*Select a project or get started with a new one</p>
      <button onClick={handleTaskPage}>Create new Project</button>
    </div>
  );
};

export default Main;
