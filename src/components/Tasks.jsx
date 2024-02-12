import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Tasks.css";
import { Link } from "react-router-dom";
import { CheckCheck, Pencil, Trash2 } from "lucide-react";
import { wait } from "../lib/utils";
import {notify} from '../lib/notification'

export const Tasks = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [todoIndex, setTodoIndex] = useState(-1);
  const [clicked, setClicked] = useState(false);

  const handleEditTodo = (index) => {
    setText(todos[index].name);
    setTodoIndex(index);
  };

  const handleCheckToDo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleDeleteToDo = (id) => {
    console.log(id);
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    setTodos(updatedTodos);

    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleAddTodo =  async() => {
    if (!text) return;
    setClicked(true);
      await wait(1000);
    if (todoIndex !== -1) {
      todos[todoIndex].name = text;
      setTodos(todos);
      localStorage.setItem("todos", JSON.stringify(todos));
      setTodoIndex(-1);
    } else {
      const todoItem = {
        id: uuidv4(),
        name: text,
        completed: false,
      };
      const toDoList = [...todos, todoItem];
      setTodos(toDoList);
      localStorage.setItem("todos", JSON.stringify(toDoList));
    }

    setText("");
    setClicked(false)
    notify('Task add successfully.','success');
  };

  useEffect(() => {
    const allTodos = JSON.parse(localStorage.getItem("todos"));
    if (allTodos) setTodos(allTodos);
  }, []);

  return (
    <main className="container">
      Task
      <div style={{ display: "flex", marginLeft: "1.5rem" }}>
        <input
          type="text"
          className="task-input"
          value={text}
          onChange={({ target }) => setText(target.value)}
          placeholder="Add a new task..."
          onKeyDown={({ key }) => key === "Enter" && handleAddTodo()}
        ></input>
      </div>
      <div className="todos-wrapper">
        {todos?.map((todo, index) => (
          <div
            key={todo.id}
            className={`todo-item ${todo.completed ? "checked-todo" : ""}`}
          >
            <Link to={`/tasks/${todo.id}`} className="todo-link" style={{opacity:todoIndex===index ? 0.5 : 1}}>
              <span>
                {index + 1}.{todo.name}
              </span>
            </Link>

            <div>
              <Trash2
                className="trash-icon"
                onClick={() => handleDeleteToDo(todo.id)}
              />
              <Pencil
                className="pencil-icon"
                onClick={() => handleEditTodo(index)}
              />
              <CheckCheck
                className="check-icon"
                onClick={() => {
                  handleCheckToDo(todo.id);
                }}
              />
            </div>
          </div>
        ))}
        <div className='todo-item'>
          {(todoIndex===-1 && clicked)&& <span style={{opacity:0.5}}>{todos?.length+1}.{text}</span>}
        </div>
     
      </div>
      
    </main>
  );
};
