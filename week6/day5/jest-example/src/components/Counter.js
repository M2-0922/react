import React, { useState } from 'react'

const Counter = ({ initialCount }) => {
    const [count, setCount] = useState(initialCount);

    const increment = () => {
        setCount(prev => prev + 1);
    }

    const decrement = () => {
        setCount(prev => prev - 1);
    }

    const reset = () => {
        setCount(initialCount);
    }

    const switchSign = () => {
        // setCount(prev => prev * -1);
        setCount(-count);
    }

  return (
    <div>
        <h1>
            Count: <span data-testid="count" style={{ color: count < 0 ? "red" : "black"}}>{count}</span>
        </h1>
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={switchSign}>Switch Sign</button>
        </div>
    </div>
  )
}

export default Counter