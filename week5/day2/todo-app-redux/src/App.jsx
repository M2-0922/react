import './App.css'
import { useRef } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from "uuid"
import { addTodo, deleteTodo, toggleTodo, updateTodo } from "./actions/actions"

function App() {
  const todos = useSelector(state => state.todos);
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const handleClick = () => {
    // dispatch(
      // { type: "ADD_TODO", 
      //   payload: { 
      //     id: uuidv4(), 
      //     text: inputRef.current.value, 
      //     completed: false 
      //   } 
      // }
    // )

    const data = {
      id: uuidv4(), 
      text: inputRef.current.value, 
      completed: false 
    };

    dispatch(addTodo(data))
    inputRef.current.value = "";
  }

  const handleDelete = (id) => {
    dispatch(deleteTodo(id))
  }

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  }

  // write a function for edit todo to dispatch to reducer

  // const handleUpdate = (id, text, completed) => {
  //   console.log(id, text, completed);
  //   const data = {
  //     id, 
  //     text: text + " updated",
  //     completed
  //   }

  //   dispatch(updateTodo(data));
  // }

  return (
    <div className="App">
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Add</button>
      {
        todos.map((todo) => {
          return (
            <div key={todo.id}>
              <li className='todo'>
                <input 
                  type="checkbox" 
                  checked={todo.completed}
                  onChange={() => handleToggle(todo.id)}
                />
                <b className={todo.completed ? 'completed-todo': ""}>{todo.text}</b>
                {/* once you click to edit button, its going to have an input instead of text and once you type and submit, you need to dispatch to reducer. */}
                {/* <button 
                  onClick={() => handleUpdate(todo.id, todo.text, todo.completed)}>
                    Update
                  </button> */}
                <button 
                  onClick={() => handleDelete(todo.id)}>
                    Delete
                  </button>
              </li>
            </div>
          )
        }) 
      }
    </div>
  )
}

export default App
