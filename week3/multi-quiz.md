What is the purpose of the useState hook?
    a. To add props to a functional component
    b. To add state to a functional component
    c. To add lifecycle methods to a functional component
    d. To add context to a functional component


What is the syntax for using useState in a functional component?
    a. const stateVariable = useState(initialValue);
    b. const [stateVariable, setStateVariable] = useState();
    c. const [stateVariable, setStateVariable] = useState(initialValue);
    d. useState(initialValue, const [stateVariable, setStateVariable]);


What is the default value of a state variable initialized with useState?
    a. undefined
    b. null
    c. false
    d. The value passed as the argument to useState


Can you update multiple state variables with a single call to useState?
    a. Yes
    b. No


How do you update a state variable with useState?
    a. setStateVariable(newValue);
    b. stateVariable(newValue);
    c. setStateVariable = newValue;
    d. setState(newValue);


What is the purpose of the useEffect hook?
    a. To add state to a functional component
    b. To add props to a functional component
    c. To add side effects to a functional component
    d. To add context to a functional component


What is the syntax for using useEffect in a functional component?
    a. useEffect(() => { callbackFunction });
    b. useEffect(callbackFunction);
    c. useEffect(() => { callbackFunction }, []);
    d. useEffect([], () => { callbackFunction });


When does the callback function passed to useEffect get called?
    a. After the component renders for the first time, and after every update to the component
    b. After the component mounts, and after every update to the component
    c. After the component mounts, and only once before the component unmounts
    d. Only after the component updates


Can you use useEffect more than once in a single component?
    a. Yes
    b. No


How do you unsubscribe from a subscription created in a useEffect hook?
    a. Call the unsubscribe function returned from the callback function
    b. Return a cleanup function from the callback function
    c. Call the cleanup function passed as an argument to the callback function
    d. Pass the subscription object to the unsubscribe function


What is the difference between useEffect and componentDidMount in a class component?
    a. useEffect gets called after the component renders for the first time, whereas componentDidMount gets called only once after the component mounts
    b. useEffect gets called after every update to the component, whereas componentDidMount gets called only once after the component mounts.
    c. useEffect gets called after the component mounts, whereas componentDidMount gets called only once after the component renders for the first time.
    d. useEffect gets called after the component mounts, whereas componentDidMount gets called only once after the component updates.


What is the purpose of the second argument to useEffect?
    a. To specify the dependency values for the effect
    b. To specify the cleanup function for the effect
    c. To specify the initial state values for the component
    d. To specify the initial props for the component


How do you conditionally run the effect only when certain values change?
    a. Pass an empty array as the second argument to useEffect
    b. Pass an array of dependency values as the second argument to useEffect
    c. Pass a function as the second argument to useEffect
    d. Use the shouldUpdate hook instead of useEffect


What happens if you pass an empty array as the second argument to useEffect?
    a. The effect runs after every update to the component
    b. The effect runs only once after the component mounts
    c. The effect never runs
    d. The effect runs only when the component unmounts


What is the purpose of the cleanup function returned from the callback function passed to useEffect?
    a. To unsubscribe from a subscription created in the effect
    b. To update the state variables of the component
    c. To re-render the component
    d. To initialize the state variables of the component


How do you run the effect only once, when the component mounts?
    a. Pass an empty array as the second argument to useEffect
    b. Pass an array of dependency values as the second argument to useEffect
    c. Use the shouldUpdate hook instead of useEffect
    d. Return a cleanup function from the callback function


Answer: b
Answer: c
Answer: d
Answer: b
Answer: a
Answer: c
Answer: c
Answer: a
Answer: a
Answer: b
Answer: b
Answer: a
Answer: b
Answer: b
Answer: a
Answer: a