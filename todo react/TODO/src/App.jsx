import { useState } from 'react'
import './App.css'
function App() { 
  // below is my intial state
  const [tasks,setTasks]=useState([])     // usestate use there
  const [taskQuery,setTaskQuery]=useState("")  // render to input box with empty string
  const [descriptionQuery,setDescriptionQuery]=useState("") // render to input box with empty string
  function handleAddTask(task){
    const newTask = {
        name:task.name,
        description:task.description
         }
         setTasks([...tasks,task])
  }
  return (
   <div>
        <input type='text' value={taskQuery} onChange={(e) => setTaskQuery(e.target.value)}/>
        <br></br><br></br>
        <input type='text' value={descriptionQuery} onChange={(e) =>setDescriptionQuery(e.target.value)}/>
        <br></br><br></br>
        <button onClick={() => handleAddTask({title:taskQuery,description:descriptionQuery})}>Add task</button>
        {/* below code inside curly bracket is conditional rendering if below conside will be false then no state changes*/ }
        {
          tasks.length>0 &&  (tasks.map((task) => 
          <div key={Math.random()}>
          <p >{task.title}</p>
          <p >{task.description}</p>
          </div>))
        }  
   </div>
  )
}

export default App
