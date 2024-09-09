import React from "react";
import "./Sidebar.css";

const Sidebar = ({
  handleTaskPage,
  listOfTasks,
  modalOpener,
  selectedTask,
}) => {
  console.log(listOfTasks);
  return (
    <div className="sideBar">
      <div className="sideBar-top">
        <h1>Your Projects</h1>
        <button onClick={handleTaskPage}>+Add Project</button>
        {listOfTasks.map((task, index) => (
          <p
            key={index}
            onClick={() => modalOpener(task)}
            className="side-title"
          >
            {task?.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
