import './App.css';
import React, { useState } from 'react';

function App(props) {
  const [count, setCount] = useState(0);
  // let count = 0;
  // const result = React.useState("Hello");
  // console.log(result);

  function incrementCount () {
    // setCount(count + 1)
    setCount(oldValue => {
      return oldValue + 1
    })
    // setCount((oldCount) => oldCount + 1);
    // count = 5;
    // console.log(count);
  }

  function decreaseCount() {
    
    // setCount(oldValue => {
    //   if(oldValue == 0){
    //     return oldValue
    //   }else{
    //     return oldValue - 1
    //   }
    // })

    // setCount(oldValue => {
    //   if(oldValue > 0){
    //     return oldValue - 1;
    //   }
    //   return oldValue
    // })

    // setCount(oldCount => oldCount > 0 ? oldCount - 1 : oldCount)


    setCount(oldValue => {
      // if(oldValue >= 0) return oldValue - 1
      // else return oldValue
      return oldValue >= 0 ? oldValue - 1 : oldValue
    })
    // ternary operator
  }

  return (
    <div className="container">
      <button onClick={decreaseCount}>Descrease</button>
      <h1>{ count }</h1>
      <button onClick={incrementCount}>Increase count</button>
    </div>
  );
}

export default App;
