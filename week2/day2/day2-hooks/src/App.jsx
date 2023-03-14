import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Something");
  }, [count]);

  function increase () {
    console.log("Hello");
    // setCount(count + 1) 
    setCount(prevCount => (prevCount + 1))
  }

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={increase}>Add</button>
    </div>
  )
}

export default App
