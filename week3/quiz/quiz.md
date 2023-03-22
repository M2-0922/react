- What is the purpose of the useState hook?
It is a feature wich allows you to store and manage data that can be changed overtime

- What is the syntax for using useState in a functional component?
`
import React, { useState } from 'react';

function MyComponent() {
  // Define a state variable using the useState hook
  const [stateVariable, setStateVariable] = useState(initialStateValue);

  // ...
}
`
- What is the default value of a state variable initialized with useState?
Undefined

- Can you update multiple state variables with a single call to useState?
With just a single call you cannot, however, you have other ways to do that.

- How do you update a state variable with useState?
 You should call the update function returned by useState, passing in the new value that you want to set for the state variable.

- What is the purpose of the useEffect hook?
It is used to handle side effects in functional components.

- What is the syntax for using useEffect in a functional component?
`
import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // Side effect code goes here
  }, [dependency1, dependency2, ...]);
  
  // Component rendering code goes here
  return (
    // JSX code goes here
  );
}
`
- When does the callback function passed to useEffect get called?
It is called after the component has rendered, or after a state update has occurred.

- Can you use useEffect more than once in a single component?
Yes, you can, in reality you might need to use multiple useEffect hooks in a single component to manage
different types of side effects.


- How do you unsubscribe from a subscription created in a useEffect hook?
 You need to return a function from the useEffect callback function that will clean up any resources used by the subscription.

- What is the difference between useEffect and componentDidMount in a class component?
useEffect is equivalent to componentDidMount, componentDidUpdate, and componentWillUnmount combined.

- What is the difference between useEffect and componentWillUnmount in a class component?
useEffect is equivalent to componentDidMount, componentDidUpdate, and componentWillUnmount combined.


- What is the difference between useEffect and componentDidUpdate in a class component?
useEffect can be used to perform side effects in functional components that run after the component is mounted or updated, while componentDidUpdate can be used to perform side effects in class components that run after the component is updated.

- How do you conditionally run the effect only when certain values change?
You can pass an array of dependencies as the second argument to the useEffect hook. 

- What is the second argument to useEffect used for?
 It is an optional argument that allows you to control when the effect function should be executed.

- How do you simulate componentDidMount with useEffect?
You can pass an empty array as the second argument to the useEffect hook. This will ensure that the effect function is only executed once, after the component is mounted.

- How do you simulate componentWillUnmount with useEffect?
You can return a cleanup function from the effect function. This function will be called when the component is about to unmount, allowing you to clean up any resources used by the component.

- How do you simulate componentDidUpdate with useEffect?
You can pass an array of dependencies as the second argument to the useEffect hook. The effect function will be executed whenever any of the dependencies in the array change, including on the initial render.

- Can you have side effects in the callback function passed to useState?
The callback function passed to useState is used to compute the initial state value, and it is called only once during the first render of the component. It is not designed to perform side effects, such as fetching data or manipulating the DOM.

- Can you have state variables in the callback function passed to useEffect?
Yes, you can use state variables in the callback function passed to useEffect. The effect function can access any state variables or props that are in scope at the time the effect is defined.