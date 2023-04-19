<<<<<<< HEAD
import './App.css';
import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTodo, deleteTodo, toggleTodo, updateTodo } from './actions/actions';

function App() {
  const todos = useSelector(state => state.todos);
  const inputRef = useRef(null);
  const [editingTodo, setEditingTodo] = useState(null);
  const dispatch = useDispatch();

  const handleClick = () => {
    const data = {
      id: uuidv4(),
      text: inputRef.current.value,
      completed: false
    };

    dispatch(addTodo(data));
    inputRef.current.value = '';
  };

  const handleDelete = id => {
    dispatch(deleteTodo(id));
  };

  const handleToggle = id => {
    dispatch(toggleTodo(id));
  };

  const handleUpdate = (id, text, completed) => {
    const data = {
      id,
      text,
      completed
    };

    dispatch(updateTodo(data));
    setEditingTodo(null);
  };
``
  const handleEdit = todo => {``
    setEditingTodo(todo);
  };

  const handleInputChange = event => {
    setEditingTodo({
      ...editingTodo,
      text: event.target.value
    });
  };

  const handleEditSubmit = () => {
    handleUpdate(editingTodo.id, editingTodo.text, editingTodo.completed);
  };

  return (
    <div className="App">
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Add</button>
      {todos.map(todo => {
        if (editingTodo && editingTodo.id === todo.id) {
          return (
            <div key={todo.id}>
              <li className="todo">
                <input type="checkbox" checked={todo.completed} onChange={() => handleToggle(todo.id)} />
                <input type="text" value={editingTodo.text} onChange={handleInputChange} />
                <button onClick={handleEditSubmit}>Update</button>
              </li>
            </div>
          );
        } else {
          return (
            <div key={todo.id}>
              <li className="todo">
                <input type="checkbox" checked={todo.completed} onChange={() => handleToggle(todo.id)} />
                <b className={todo.completed ? 'completed-todo' : ''}>{todo.text}</b>
                <button onClick={() => handleEdit(todo)}>Edit</button>
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
              </li>
            </div>
          );
        }
      })}
=======
import './App.css'
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from "./components/TodoList/TodoList"
function App() {

  return (
    <div className="App">
      <AddTodo />
      <TodoList />
>>>>>>> origin/master
    </div>
  );
}

export default App;
