- What is the purpose of the useState hook?
  Adding state to a functional component. It can be used to keep track of strings, numbers, booleans, arrays, objects.

- What is the syntax for using useState in a functional component?
  const [state, setState] = useState(initialValue); 

- What is the default value of a state variable initialized with useState?
  false

- Can you update multiple state variables with a single call to useState?
  Yes

- How do you update a state variable with useState?
  Using setState()

- What is the purpose of the useEffect hook?
  useEffect helps to perform side effects in functional components that you need to run after updating the DOM.

- What is the syntax for using useEffect in a functional component?
  useEffect(() => {}, []);

- When does the callback function passed to useEffect get called?
  It is executed right after the DOM update.

- Can you use useEffect more than once in a single component?
  Yes

- How do you unsubscribe from a subscription created in a useEffect hook?
  Create a "bound" copy of the function.

- What is the difference between useEffect and componentDidMount in a class component?
  "componentDidMount" and "useEffect" run after the mount. However useEffect runs after the paint has been committed to the screen as opposed to before.

- What is the difference between useEffect and componentWillUnmount in a class component?
  "useEffect" is a hook used in functional components to handle side effects, while "componentWillUnmount" is a lifecycle method used in class components to perform cleanup operations before the component is unmounted.

- What is the difference between useEffect and componentDidUpdate in a class component?
  "useEffect" is a hook used in functional components to handle side effects, while "componentDidUpdate" is a lifecycle method used in class components to perform operations after the component updates. 

- How do you conditionally run the effect only when certain values change?
  Passing a variable as the second argument.
  e.g. 
    const [count, setCount] = useState(0);

    useEffect(() => {
      // This will run whenever count changes
      console.log('Count has changed:', count);
    }, [count]);

- What is the second argument to useEffect used for?
  It's an array of dependencies. React compares the current value of dependency and the value on previous render. If they are not the same, effect is invoked.

- How do you simulate componentDidMount with useEffect?
  useEffect(() => {
    // code to run on component mount
    console.log('Component mounted');
  }, []);

  return (
    // component render code
    <div>My Component</div>
  );

- How do you simulate componentWillUnmount with useEffect?
    useEffect(() => {
    // Component did mount
    console.log('Component mounted');

    // Component will unmount
    return () => {
      console.log('Component unmounted');
    };
  }, []);

- How do you simulate componentDidUpdate with useEffect?
    const [count, setCount] = useState(0);

    useEffect(() => {
      // code to run on count update
      console.log('Count updated: ', count);
    }, [count]);

- Can you have side effects in the callback function passed to useState?
  No.The callback function passed to useState hook is used to initialize the state variable with an initial value, and it is only called once, on the initial render. Its purpose is not to perform any side effects.

- Can you have state variables in the callback function passed to useEffect?
  No, you cannot have state variables in the callback function passed to the useEffect hook. The reason for this is that the callback function passed to useEffect is only called once, during the initial render or when the dependencies specified in the second argument change.