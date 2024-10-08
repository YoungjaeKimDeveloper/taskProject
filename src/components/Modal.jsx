import React from "react";
import "./Modal.css";
import { FaTrash } from "react-icons/fa";

const Modal = ({ modalOpener, selectedTask, deleteTask }) => {
  console.log(selectedTask);
  return (
    <div className="modal-layout">
      <p className="back" onClick={modalOpener}>
        back
      </p>
      <i className="fa-solid fa-arrow-right"></i>
      <div className="modal-content">
        <p className="title">{selectedTask.title}</p>
        <FaTrash
          className="delete-icon"
          onClick={() => deleteTask(selectedTask)}
        />
        <p className="content">{selectedTask.description}</p>
      </div>
    </div>
  );
};

export default Modal;
