import React, { useState } from "react";

function Counter(props) {
  console.log(props);
  const [counter, setCounter] = useState(0);

  const incrementCounter = (count) => {
    setCounter((prev) => prev + count);
  };

  return <div>{props.display(counter, incrementCounter)}</div>;
}

export default Counter;
