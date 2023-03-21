- What is the purpose of the useState hook?<br>
  it allows us to track state in functional component.

- What is the syntax for using useState in a functional component?<br>
```js
import { useState } from 'react';
const [ state, setState ] = useState(0);
```

- What is the default value of a state variable initialized with useState?<br>
  false

- Can you update multiple state variables with a single call to useState?<br>
  yes, we can do it with object

- How do you update a state variable with useState?<br>
  set the new variable in setCount() method

- What is the purpose of the useEffect hook?<br>
  to tell React that the component needs to do something after render.

- What is the syntax for using useEffect in a functional component?<br>
```js
import { useEffect } from 'react';
useEffect(() => {
    //method
},[])
```

- When does the callback function passed to useEffect get called?<br>
  it's called after the initial render, and if useEffect has second argument the callback function will be called when the second argument value changed since previous render.

- Can you use useEffect more than once in a single component?<br>
  Yes, in the case that useEffect has second argument.

- How do you unsubscribe from a subscription created in a useEffect hook?<br>
  set [] on useEffect second argument.

- What is the difference between useEffect and componentDidMount in a class component?<br>
  useEffect handle side effects in functional components, 
  while componentDidMount is handle side effects only during the initial mount of a class component.

- What is the difference between useEffect and componentWillUnmount in a class component?<br>
  useEffect handle both setup and cleanup of side effects in functional components,
  while componentWillUnmount is used only for cleanup in class components.

- What is the difference between useEffect and componentDidUpdate in a class component?<br>
  useEffect handle both setup and cleanup of side effects in functional components,
  while componentDidUpdate is used only for handling actions that need to happen after a component updates in class components.

- How do you conditionally run the effect only when certain values change?<br>
  set certain values on useEffect second argument.

- What is the second argument to useEffect used for?<br>
  control when the effect runs after the component has been mounted

- How do you simulate componentDidMount with useEffect?<br>
  using the useEffect with an empty dependency array, the effect only be run once.
  ```js
  import { useEffect } from 'react';
  function MyComponent() {
    useEffect(() => {
        //method
    },[]);
  }
  ```

- How do you simulate componentWillUnmount with useEffect?<br>
  using the useEffect has method that return empty.
  ```js
  import { useEffect } from 'react';
  function MyComponent() {
    useEffect(() => {
        return() => {};
    },[]);
  }
  ```

- How do you simulate componentDidUpdate with useEffect?<br>
  Using the useEffect has method includs setState method and props as second argument.
  When props value changes, this useEffect is called then other useEffect has state as second argument will be called.
  ```js
  import { useState, useEffect } from 'react';

  function MyComponent({id}) {
    const [ state, setState ] = useState("");

    useEffect(() => {
        something();
    },[id]);

    useEffect(() => {
        //method
    },[state]);

    function something() {
        setState(newstate);
    }
  }
  ```

- Can you have side effects in the callback function passed to useState?<br>
　No. It can cause low performance because side effects is called every re-render.
  
- Can you have state variables in the callback function passed to useEffect?<br>
  Yes.