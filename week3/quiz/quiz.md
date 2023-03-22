- What is the purpose of the useState hook?

  The purpose is to utilize React components' lifecycle

- What is the syntax for using useState in a functional component?

  `const {state, setState} = useState()`

- What is the default value of a state variable initialized with useState?

  The default value is `undefined`

- Can you update multiple state variables with a single call to useState?

  You cannot but you can do the similar thing as passing an object with multiple state variables to useState.

- How do you update a state variable with useState?

  You can update a state by calling a setState function passed from useState.

- What is the purpose of the useEffect hook?

  UseEffect allows you to utilize React components' lifecycle.

- What is the syntax for using useEffect in a functional component?

  `useEffect(() => {}, [])`

- When does the callback function passed to useEffect get called?

  The callback function is called when the component is re-rendered

- Can you use useEffect more than once in a single component?

  Yes. You can use useEffect for multiple cases.

- How do you unsubscribe from a subscription created in a useEffect hook?

  To set a callback function as a return value of useEffect.

- What is the difference between useEffect and componentDidMount in a class component?

  UseEffect includes multiple lifecyle such as componentDidMount.

- What is the difference between useEffect and componentWillUnmount in a class component?

  UseEffect includes multiple lifecyle such as componentWillUnmount.

- What is the difference between useEffect and componentDidUpdate in a class component?

  UseEffect includes multiple lifecyle such as componentDidUpdate.

- How do you conditionally run the effect only when certain values change?

  You can conditionally run the effect by specifing a dependency in the second argument of useEffect.

- What is the second argument to useEffect used for?

  The second argument is used for depenedencies to get useEffect triggered with.

- How do you simulate componentDidMount with useEffect?

  `useEffect(() => {}, [])`

- How do you simulate componentWillUnmount with useEffect?

  `useEffect(() => { return a cleanup funciton }, [])`

- How do you simulate componentDidUpdate with useEffect?

  `useEffect(() => {}, [dependencies])`

- Can you have side effects in the callback function passed to useState?

  Yes

- Can you have state variables in the callback function passed to useEffect?

  Yes
