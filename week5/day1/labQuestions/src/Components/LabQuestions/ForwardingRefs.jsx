// Lab question 1
// Create a component that forwards a ref to a child component and logs the child component's props when it is clicked.

import React, { forwardRef, useRef } from 'react'

const ChildRef = forwardRef((props, ref) => {
    return <input ref={ref} type={props.type} placeholder={props.placeholder}/>;
});

const ForwardingRefs = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);

    const handleClick1 = () => {
        console.log(ref1.current);
    }
    const handleClick2 = () => {
        console.log(ref2.current);
    }

  return (
    <>
        <ChildRef ref={ref1} type="number" placeholder="input number"/>
        <button onClick={handleClick1}>check log</button>
        <ChildRef ref={ref2} type="text" placeholder="input text"/>
        <button onClick={handleClick2}>check log</button>
    </>
  )
}

export default ForwardingRefs