import './App.css';
import Todo from './components/Todo';
import Counter from './components/Counter';

function App() {
  const todoList = [
    { id: 1, title: "create react app", completed: true },
    { id: 2, title: "create home component", completed: false },
    { id: 3, title: "drink coffee", completed: true }
  ]

  const count = {
    initialCount: 0
  }
  return (
    <div className="App">
      {
        todoList.map(todo => <Todo key={todo.id} todo={todo} />)
      }
      {/* <Todo /> */}

      <Counter {...count} />
    </div>
  );
}

export default App;
