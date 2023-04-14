// Lab question 3
// Create a pure component that renders a list of items.
// The component should only rerender when the list of items changes.

import React, { useState } from 'react';

class MyComponent extends React.PureComponent {
    render() {
        return <li>{this.props.message}</li>
    }
}

const PureComponent = () => {
  const [ items, setItems ] = useState(["1"]);

  function handleClick() {
    let newArray = items;
    newArray[newArray.length] = String(newArray.length + 1);
    setItems(newArray);
  }

  return (
    <div>
        {items.map((item) => {
          console.log(item);
          return(
            <MyComponent message={`this item is ${item}`} />
          )
        })}
        <button onClick={handleClick}>Add item</button>
    </div>
  )
}

export default PureComponent