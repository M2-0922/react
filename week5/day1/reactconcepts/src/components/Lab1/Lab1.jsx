import React from "react";
import ChildComponent from "./ChildComponent";

// Create a component that uses a render prop to render a list of items. The render prop should take in an array of items and render them as `<li>` elements.

const Lab1 = () => {
  const list = ["item1", "item2", "item3"];
  return (
    <>
      <ChildComponent 
        items={list} 
        render={(item, name) => <div>{item} - {name}</div>} 
      />

      <ChildComponent 
        items={list} 
        render={(item) => <div>{item} - <button>Delete</button></div>} 
      />
      
      <ChildComponent 
        items={list} 
        render={(item) => <div>{item} - <button>Edit</button></div>} 
      />

      <ChildComponent 
        items={list} 
        render={(item) => <div>{item} - <span>Hello</span></div>} 
      />
    </>
  );
};

export default Lab1;
