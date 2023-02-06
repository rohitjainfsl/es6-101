import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';

function Home() {

  const [inputValue, setInputvalue] = useState('')
  const [tasks, setTasks] = useState([])

  function handleChange(e) {
    setInputvalue(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setTasks([...tasks, inputValue])
    setInputvalue('')
  }

  function List() {
    return (
      <ul>
        {
          tasks.map((task, index) => {
            return (
              <li
                key={index}
              >
                {task}
                <a href=''><DeleteIcon /></a>
                <a href=''><EditIcon /></a>
                <a href=''><CheckIcon /></a>
              </li>
            )
          })
        }
      </ul>
    )
  }

  return (
    <div className='todolist'>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder="Enter your task" value={inputValue}
          onChange={handleChange}
        />
        <button type="submit">Add Task</button>
      </form>


      <List />

    </div>
  )
}

export default Home