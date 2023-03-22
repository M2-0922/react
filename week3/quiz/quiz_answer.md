- What is the purpose of the useState hook?
```
The purpose is allowing track state in a function component.
```
- What is the syntax for using useState in a functional component?
```
const [state, setState] = useState(initialState) 
```
- What is the default value of a state variable initialized with useState?
```
undefined
```
- Can you update multiple state variables with a single call to useState?
```
Yes, if we combine the loading state and data state into one state object, we can do one setState call and there will only be one render.
```
- How do you update a state variable with useState?
```
 Using setState(newState) function.
```
- What is the purpose of the useEffect hook?
```
The purpose is telling React that it has to do something after the render
```
- What is the syntax for using useEffect in a functional component?
```
import React, { useEffect } from 'react';
useEffect(() => {
    // process 
    }, 
    [/* Arbitrary Variables*/]
);
```
- When does the callback function passed to useEffect get called?
```
It’s executed after the screen is drawn.
```
- Can you use useEffect more than once in a single component?
```
There is no problem. But they will be executed at the same time, but the later request processing may finish earlier first, so the request needs to be cleaned up when mounted.
```
- How do you unsubscribe from a subscription created in a useEffect hook?
```
 Cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
```
- What is the difference between useEffect and componentDidMount in a class component?
```
 UseEffect is called after every rendering but componentDidMount is executed only once in the lifecycle.
```
- What is the difference between useEffect and componentWillUnmount in a class component?
```
UseEffect is called at three different times: when mounting, when updating the monitored value, and when unmounting.
componentWillUnmount is called just before the component is unmounted and destroyed.
```
- What is the difference between useEffect and componentDidUpdate in a class component?
```
Useeffect is executed after rendering is done and reflected on the screen.
ComponentDidUpdateh is called after some value is updated by setState.
```
- How do you conditionally run the effect only when certain values change?
```
Add the variable of target in the array.
```
- What is the second argument to useEffect used for?
```

```
- How do you simulate componentDidMount with useEffect?
```
```
- How do you simulate componentWillUnmount with useEffect?
```
```
- How do you simulate componentDidUpdate with useEffect?
```
```
- Can you have side effects in the callback function passed to useState?
```
```
- Can you have state variables in the callback function passed to useEffect?
```
```