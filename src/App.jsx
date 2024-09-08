import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import NewTask from "./components/NewTask";
function App() {
  const [isTaskPage, setisTaskPage] = useState(false);
  const handleTaskPage = () => {
    setisTaskPage((pageSwitch) => !pageSwitch);
  };
  // Tasks Part
  const [listOfTasks, setListOfTask] = useState([]);
  const [task, setTask] = useState({
    title: "Write Your Title",
    description: "Write Your Description",
  });
  // Handle Task
  const handleTask = (target, e) => {
    setTask((prev) => ({ ...prev, [target]: e }));
  };
  const addTask = (task) => {
    setListOfTask((prev) => [...prev, task]);
    handleTaskPage();
  };
  console.log(task.title);
  console.log(task.description);
  console.log(listOfTasks);
  return (
    <div className="main">
      <Sidebar
        handleTaskPage={handleTaskPage}
        listOfTasks={listOfTasks}
        task={task}
      />
      {isTaskPage ? (
        <NewTask handleTask={handleTask} addTask={addTask} task={task} />
      ) : (
        <Main />
      )}
    </div>
  );
}

export default App;
