import { useState } from 'react'
import './App.css'
import Taskform from './components/Taskform'
import Title from './components/Title'
import NoTask from './components/NoTask'
import ShowTask from './components/ShowTask'

function App() {

  const [formData, setformData] = useState({
    task: '',
    description: '',
  })
  const [Tasks, setTasks] = useState([
    {
      task: 'task-1',
      description: 'This is my name and the name is golam masud.so besically',
    }
  ]);

  function removeTask(index){
      console.log(index);
  }

  return (
    <div>
      {/* title */}
      <Title />
      {/* form */}
      <Taskform
        formData={formData}
        setformData={setformData}
        setTasks={setTasks}
      />
      {/* show-task */}

      {
        Tasks.length == 0 ? <NoTask /> : <ShowTask removeTask={removeTask} Tasks={Tasks} />
      }

    </div>
  )
}

export default App
