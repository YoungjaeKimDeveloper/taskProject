import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import NewTask from "./components/NewTask";
import Modal from "./components/Modal";
// Get the data from local storage

function App() {
  const [isTaskPage, setisTaskPage] = useState(false);
  const handleTaskPage = () => {
    setisTaskPage((pageSwitch) => !pageSwitch);
  };

  // Tasks Part
  const getInitialTasks = () => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  };
  useEffect(() => {
    getInitialTasks();
  }, []);
  const [listOfTasks, setListOfTask] = useState(getInitialTasks);

  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  // set the value from local Storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(listOfTasks));
  }, [listOfTasks]);

  console.log(JSON.stringify(listOfTasks));
  // Handle Task
  const handleTask = (target, e) => {
    setTask((prev) => ({ ...prev, [target]: e }));
  };
  const addTask = (task) => {
    setListOfTask((prev) => [...prev, task]);
    handleTaskPage();
    setTask({ title: "", description: "" });
  };
  // Modal Handler
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const modalOpener = (task) => {
    setIsModalOpen((prev) => !prev);
    selectTask(task);
  };
  const selectTask = (task) => setSelectedTask(task);
  // Filter Function
  const deleteTask = (toDeleteTask) => {
    const filteredTask = listOfTasks.filter(
      (tasks) => toDeleteTask.title !== tasks.title
    );
    setListOfTask(filteredTask);
    handleTaskPage();
  };
  //Testing Console
  console.log(task.title);
  console.log(task.description);
  console.log(listOfTasks);
  console.log(selectedTask);
  return (
    <div className="main">
      {isModalOpen ? (
        <Modal
          modalOpener={modalOpener}
          selectedTask={selectedTask}
          deleteTask={deleteTask}
        />
      ) : (
        <>
          <Sidebar
            handleTaskPage={handleTaskPage}
            listOfTasks={listOfTasks}
            task={task}
            modalOpener={modalOpener}
            selectTask={selectTask}
          />
          {isTaskPage ? (
            <NewTask
              handleTask={handleTask}
              addTask={addTask}
              task={task}
              modalOpener={modalOpener}
            />
          ) : (
            <Main handleTaskPage={handleTaskPage} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
