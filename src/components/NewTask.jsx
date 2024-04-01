import React, { useState } from 'react'

const NewTask = ({onAddTask}) => {
  const [task, setTask] = useState("");

  const handleChange = (event) => {
    setTask(event.target.value)
  }

  const handleClick = () => {
    if(task.trim() === ""){
      return;
    }
    onAddTask(task);
    setTask("")
  }
  return (
    <div className='flex items-center gap-4 mb-4'>
      <input type="text" onChange={handleChange} value={task} className='w-64 px-2 py-1 rounded-sm bg-stone-200' />
      <button onClick={handleClick} className='text-stone-950 p-1 rounded-lg bg-green-400 hover:bg-green-700 hover:text-stone-200'>Add Task</button>
    </div>
  )
}

export default NewTask
