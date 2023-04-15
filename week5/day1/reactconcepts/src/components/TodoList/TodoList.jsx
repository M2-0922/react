import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, updateTodo, toggleTodo } from '../../store/actions';

function TodoList() {
const [text, setText] = useState('');
  const todos = useSelector(state => state.todos);
const dispatch = useDispatch();

    const handleDelete = (id) => {
        console.log(id);
        dispatch(deleteTodo({
            id
        }))
    }

    const handleUpdate = (id, text) => {
        dispatch(updateTodo({
            id,
            text
        }))
    }

    const handleToggle = (id) => {
        dispatch(toggleTodo({
            id
        }))
    }

  return (
    // <ul>
    //   {todos.map(todo => (
    //     <li key={todo.id}>{todo.text}</li>
    //   ))}
    // </ul>
    <div>
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    <input value={text} type="checkbox" checked={todo.completed} onChange={() => handleToggle(todo.id)}/>
                    <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.text}</span>
                    <button onClick={() => handleDelete(todo.id)}>Delete</button>
                    <button onClick={() => handleUpdate(todo.id, 'Updated')}>Update</button>
                </li>
            ))}
        </ul>
        </div>
  );
}

export default TodoList;