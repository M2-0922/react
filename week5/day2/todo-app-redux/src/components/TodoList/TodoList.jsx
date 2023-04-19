import React from 'react'
import { useSelector } from 'react-redux'
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = () => {

  const todos = useSelector(state => state.todos);
  
  return (
      todos.map((todo) => <TodoListItem key={todo.id} {...todo} />) 
  )
}

export default TodoList