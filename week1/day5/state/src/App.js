import './App.css';

// way1
// import React from 'react';
// const [count, setCount] = React.useState(0);

// way2
import { useState } from 'react';
// import React, { useState } from 'react';
// → we don't need to input "React"
// const [count, setCount] = useState(0);

import Confetti from 'react-confetti';

function App() {
  const [count, setCount] = useState(0);
  // const result = React.useState("Hello");
  // console.log(result);

  function incrementCount() {
    setCount((oldCount) => (oldCount + 1));

    // setCount((oldCount) => {
    //   return oldCount + 1;
    // });
    // setCount(count + 1);

  }

  function decrementCount() {

    //short way
    setCount((oldCount) => (
      oldCount > 0 ? oldCount - 1 : oldCount
    )); 

    // setCount(oldCount => {
    //   if ( oldCount > 0) {
    //     return oldCount - 1;
    //   } else {
    //     return oldCount;
    //   }
    // })

  }

  return (
    <div className='container'>
      { count === 10 && <Confetti />}
      <button onClick={incrementCount}>increse with Function</button>
      {/* or */}
      <button onClick={() => setCount((oldValue) => oldValue + 1)}>increse</button>
      <h1>{ count }</h1>
      <button onClick={decrementCount}>decrease with Function</button>
      {/* or */}
      <button 
        onClick={() => setCount((oldValue) => (oldValue) > 0 ? oldValue - 1 : oldValue)}
      >
        decrease
      </button>
    </div>
  );
}

export default App;
