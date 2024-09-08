import React from "react";
import "./NewTask.css";
const NewTask = ({ task, handleTask, addTask }) => {
  return (
    <div className="newTask">
      <form className="newTask-form">
        <div className="new-Task-form-div">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Write your Title"
            value={task?.title}
            onChange={(e) => handleTask("title", e.target.value)}
          />
        </div>
        <div className="new-Task-form-div">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            placeholder="Write your Description"
            value={task?.description}
            onChange={(e) => handleTask("description", e.target.value)}
          />
        </div>
        <div className="buttons">
          <button>Cancel</button>
          <button onClick={() => addTask(task)}>Save</button>
        </div>
      </form>
    </div>
  );
};

export default NewTask;
