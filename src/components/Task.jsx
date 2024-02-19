import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './task.css'


export const Task = () => {
  const [task,setTask] = useState('')
  console.log(task)
  const {id} = useParams()
 
  useEffect(() =>{
    const tasks = JSON.parse(localStorage.getItem('todos'))
    const currentTask = tasks?.find(task => task.id === id)
    setTask(currentTask)
    },[])

  return (
    <div className='container'>
  <h2 className='todo-title_back'>{task.name}</h2>
  <Link to='/tasks' className='link-back'>Go Back</Link>
    </div>
  )
}
