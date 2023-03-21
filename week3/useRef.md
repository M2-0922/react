`useRef` is a built-in React hook that returns a mutable ref object whose current property is initialized to the value passed to `useRef()`. The value of current can be changed during the component's life cycle, and the change does not trigger a re-render.

`useRef` is useful for preserving values across renders, storing references to DOM nodes or other objects, or triggering an imperative action from an event handler.

Here are some examples of how to use `useRef`:

Preserving state across renders

```js
import React, { useState, useRef } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  // Store the previous count value in the ref
  prevCountRef.current = count;

  return (
    <div>
      <p>Current count: {count}</p>
      <p>Previous count: {prevCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```
In this example, we use useRef to store a reference to the previous count value. On each render, we update the ref with the current count value before rendering the component. We can then access the previous count value using prevCountRef.current.

Storing references to DOM nodes

```js
import React, { useRef, useEffect } from 'react';

const TextInput = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <label>
        Enter your name:
        <input type="text" ref={inputRef} />
      </label>
    </div>
  );
};
```

In this example, we use useRef to store a reference to the input element. We then use the useEffect hook to focus the input when the component mounts. Without useRef, we would need to use a class component and the ref attribute to access the input element.

Triggering an imperative action

```js
import React, { useRef } from 'react';

const Button = () => {
  const buttonRef = useRef();

  const handleClick = () => {
    buttonRef.current.disabled = true;
    setTimeout(() => {
      buttonRef.current.disabled = false;
    }, 1000);
  };

  return (
    <div>
      <button onClick={handleClick} ref={buttonRef}>Click me</button>
    </div>
  );
};
```
In this example, we use useRef to store a reference to the button element. When the button is clicked, we disable it using buttonRef.current.disabled = true and set a timeout to re-enable it after one second. This is an example of triggering an imperative action from an event handler using useRef.

These are just a few examples of how useRef can be used in React. useRef is a powerful tool that allows you to access and manipulate DOM nodes and other objects outside of the React rendering cycle.