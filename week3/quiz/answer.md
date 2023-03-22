- What is the purpose of the useState hook?
```
To manage state in functional components.
```
- What is the syntax for using useState in a functional component?
```js
function Component() {
    const [stateVariable, setStateVariable] 
        = useState(initialValue);
}
```
- What is the default value of a state variable initialized with useState?
```
```
- Can you update multiple state variables with a single call to useState?
```
No, the useState hook manages one single state variable in a functional component.
```
- How do you update a state variable with useState?
```
By using a setter function, you an update a state variable. 
```
- What is the purpose of the useEffect hook?
```
To delay the execution of a function until the component is rendered.
```
- What is the syntax for using useEffect in a functional component?
```js
function MyComponent(props) {
  useEffect(() => {
    // a function you want to execute
  }, []);

  return (
    // JSX
  );
}
```
- When does the callback function passed to useEffect get called?
```
IDK :(
```
- Can you use useEffect more than once in a single component?
```
YES!
```
- How do you unsubscribe from a subscription created in a useEffect hook?
```
Returning a cleanup function from the effect function allows you to unsubscribe from a subscription created in a useEffect hook.
```
- What is the difference between useEffect and componentDidMount in a class component?
```
The useEffect hook is used to run some code after the component has rendered for the first time, or to run some code whenever a specific dependency changes whilst componentDidMount is called when the component mounts for the first time.
```
- How do you conditionally run the effect only when certain values change?
```
Setting an array of dependencies as the second argument o the useEffect hook allows you to conditionally run the effect only when certain values change.
```
- What is the second argument to useEffect used for?
```
The second argument of the useEffect hook controls the execution timing of the function set as the first argument.
```
- How do you simulate componentDidMount with useEffect?
```
By passing an empty array to the useEffect hook, you can silulate componentDidMount.
```
- How do you simulate componentWillUnmount with useEffect?
```
You can return a cleanup function to simulate componentWillUnmount.
```
- How do you simulate componentDidUpdate with useEffect?
```

```
- Can you have side effects in the callback function passed to useState?
```
No.
```
- Can you have state variables in the callback function passed to useEffect?
```
Yes?
```