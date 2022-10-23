import "./styles.css";
import Status from "./components/Status";

import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="App">
      <h1>Task Management</h1>
      <div className="mainContainer">
        <Status status="Backlog" tasks={tasks} setTasks={setTasks} />
        <Status status="In Progress" tasks={tasks} setTasks={setTasks} />
        <Status status="Done" tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}
