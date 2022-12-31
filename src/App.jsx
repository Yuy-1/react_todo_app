import { useState } from 'react'

// custom components
import CustomForm from "./components/CustomForm.jsx";
import TaskList from "./components/TaskList.jsx"

function App() {
  const [task, setTask] = useState([]);

  const addTask = (task) => {
    setTask(prevState => [...prevState, task])
  }

  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      <CustomForm addTask={addTask} />
      {tasks && <TaskList />}
    </div>
  )
}

export default App
