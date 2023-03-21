questions

- What is the purpose of the useState hook?
- What is the syntax for using useState in a functional component?
- What is the default value of a state variable initialized with useState?
- Can you update multiple state variables with a single call to useState?
- How do you update a state variable with useState?
- What is the purpose of the useEffect hook?
- What is the syntax for using useEffect in a functional component?
- When does the callback function passed to useEffect get called?
- Can you use useEffect more than once in a single component?
- How do you unsubscribe from a subscription created in a useEffect hook?
- What is the difference between useEffect and componentDidMount in a class component?
- What is the difference between useEffect and componentWillUnmount in a class component?
- What is the difference between useEffect and componentDidUpdate in a class component?
- How do you conditionally run the effect only when certain values change?
- What is the second argument to useEffect used for?
- How do you simulate componentDidMount with useEffect?
- How do you simulate componentWillUnmount with useEffect?
- How do you simulate componentDidUpdate with useEffect?
- Can you have side effects in the callback function passed to useState?
- Can you have state variables in the callback function passed to useEffect?

answers

- The purpose of the useState hook is to add state to a functional component.
- The syntax for using useState is const [stateVariable, setStateVariable] = useState(initialValue);.
- The default value of a state variable initialized with useState is the value passed as the argument to useState.
- No, you need to call useState once for each state variable.
- You update a state variable with setStateVariable(newValue);.
- The purpose of the useEffect hook is to add side effects to a functional component.
- The syntax for using useEffect is useEffect(() => { callbackFunction }, [dependencyArray]);.
- The callback function passed to useEffect gets called after the component renders for the first time, and after every update to the component.
- Yes, you can use useEffect more than once in a single component.
- You unsubscribe from a subscription created in a useEffect hook by returning a cleanup function from the callback function.
- useEffect gets called after the component renders for the first time, whereas componentDidMount gets called only once after the component mounts.
- The cleanup function returned from a useEffect hook gets called when the component unmounts, whereas componentWillUnmount gets called only once before the component unmounts.
- useEffect gets called after every update to the component, whereas componentDidUpdate gets called only after a component updates.
- You pass an array of dependency values as the second argument to useEffect, and the effect only runs when one of the dependency values changes.
- The second argument to useEffect is an array of dependency values.
- You pass an empty array [] as the second argument to useEffect.
- You return a cleanup function from the callback function passed to useEffect.
- You can conditionally run the effect only when certain values change by passing an array of dependency values as the second argument to useEffect. Inside the callback - function, you can check the previous and current values of the dependency value to determine whether the effect should run.
- You can have side effects in the callback function passed to useEffect.
- You can have state variables in the callback function passed to useEffect, but you need to be careful not to create an infinite loop of updates.