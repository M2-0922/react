import { useState, useEffect } from 'react'
import './App.css';

import Header from './components/Header/Header';
import StarWars from './components/StarWars/StarWars';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted");
  }, []);

  useEffect(() => {
    console.log("Counting");
  }, [count]);

  function increase() {
    // setCount(count + 1);
    setCount(prevCount => (prevCount + 1))
  }

  return (
    <div className="App">
      <Header count={count}/>
      <StarWars />
      <p>{count}</p>
      <button onClick={increase}>Add</button>
    </div>
  )
}

export default App
