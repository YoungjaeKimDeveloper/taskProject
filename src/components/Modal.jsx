import React from "react";
import "./Modal.css";

const Modal = ({ modalOpener, selectedTask }) => {
  console.log(selectedTask);
  return (
    <div className="modal-layout">
      <p className="back" onClick={modalOpener}>
        back
      </p>
      <i class="fa-solid fa-arrow-right"></i>
      <div className="modal-content">
        <p className="title">{selectedTask.title}</p>
        <p className="content">{selectedTask.description}</p>
      </div>
    </div>
  );
};

export default Modal;
