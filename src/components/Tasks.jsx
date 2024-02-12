import React, {useEffect, useState} from 'react'
import { json } from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';  
import './Tasks.css'
import { Link } from 'react-router-dom';
import {CheckCheck, Pencil, Trash2} from 'lucide-react'; 
export const Tasks = () => {

const [todo, setTodo]=useState('');
const [todos, setTodos]=useState([]);
const [editToDo,setEditToDo]=useState([]);



const handleCheckToDo = (id) => {
  const updatedTodos = todos.map(todo => {
    if (todo.id === id) {
     todo.completed= !todo.completed
    }
    return todo;
  });

  setTodos(updatedTodos);
  localStorage.setItem('todos', JSON.stringify(updatedTodos));
}

const handleDeleteToDo = (id) => {

  console.log(id)
  const updatedTodos = todos.filter(todo => todo.id !== id);

  setTodos(updatedTodos);

  localStorage.setItem('todos', JSON.stringify(updatedTodos));
}


const handleAddTodo=()=>{
  if (!todo) return;

  const todoItem={
    id: uuidv4(),
    name: todo,
    completed: false
  }

  const toDoList=[...todos,todoItem]
  setTodos(toDoList)
  localStorage.setItem('todos', JSON.stringify(toDoList))
 
  setTodo('')
}

useEffect(()=>{
  const allTodos=JSON.parse(localStorage.getItem('todos'))
  if (allTodos) setTodos(allTodos)
},[])

  return (
    <main className='container'>Task
      <div style={{display:'flex',marginLeft: '1.5rem'}}>
       <input 
       type='text'
       className='task-input'
       value={todo}
       onChange={({target})=> setTodo(target.value)  }
       placeholder='Add a new task...'
       onKeyDown={({key})=>key==='Enter' && handleAddTodo()}
       >
       </input> 

      </div>
      <div className='todos-wrapper'>
       {
        todos?.map((todo,index)=>(
          <div key={todo.id}  className={`todo-item ${todo.completed ? 'checked-todo' : ''}`} > 
          <Link  to={`/tasks/${todo.id}`} className='todo-link'>
            <span>{index+1}.{todo.name}</span>
          </Link>

                <div>
          <Trash2 className='trash-icon' onClick={() => handleDeleteToDo(todo.id)} />
         <Pencil className='pencil-icon' />
          <CheckCheck className='check-icon' onClick={()=>{handleCheckToDo(todo.id)}} />
            </div>
          </div>
         
        )
        )
       }
      </div>
    </main>
  )
}
