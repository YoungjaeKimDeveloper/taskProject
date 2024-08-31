import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import NewTask from "./components/NewTask";
function App() {
  const [isTaskPage, setisTaskPage] = useState(false);
  const handleTaskPage = () => {
    setisTaskPage((pageSwitch) => !pageSwitch);
  };
  return (
    <div className="main">
      <Sidebar handleTaskPage={handleTaskPage} />
      {isTaskPage ? <NewTask /> : <Main />}
    </div>
  );
}

export default App;
