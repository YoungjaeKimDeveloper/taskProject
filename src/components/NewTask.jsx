import React from "react";
import "./NewTask.css";
const NewTask = () => {
  return (
    <div className="newTask">
      <form className="newTask-form">
        <div className="new-Task-form-div">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" placeholder="Write your Title" />
        </div>
        <div className="new-Task-form-div">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            placeholder="Write your Description"
          />
        </div>
        <div className="buttons">
          <button>Cancel</button>
          <button>Save</button>
        </div>
      </form>
    </div>
  );
};

export default NewTask;
