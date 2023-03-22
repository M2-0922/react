- What is the purpose of the useState hook?
To create a state object and get the updete function of it. Also, it allows developers to give the initial value of the state.
- What is the syntax for using useState in a functional component?
const [state, setState] = useState()
- What is the default value of a state variable initialized with useState?
undefined
- Can you update multiple state variables with a single call to useState?
no
- How do you update a state variable with useState?
const [state, setState] = useState()
setState("value")
- What is the purpose of the useEffect hook?
to take action in specific lifecycles 
- What is the syntax for using useEffect in a functional component?
useEffect(() => {...}, [...])
- When does the callback function passed to useEffect get called?
1) whenever a variable is updated in the array that is given as 2nd parameter
2) if no 2nd parameter is given it will be executed with every update
3) if the 2nd array is empty it will be executed when the component is mounted.
- Can you use useEffect more than once in a single component?
yes
- How do you unsubscribe from a subscription created in a useEffect hook?
set [] on useEffect second argument
- What is the difference between useEffect and componentDidMount in a class component?
useEffect handle side effects in functional components, while componentDidMount is handle side effects only during the initial mount of a class component.

- What is the difference between useEffect and componentWillUnmount in a class component?
useEffect handle both setup and cleanup of side effects in functional components, while componentWillUnmount is used only for cleanup in class components.
- What is the difference between useEffect and componentDidUpdate in a class component?
useEffect handle both setup and cleanup of side effects in functional components, while componentDidUpdate is used only for handling actions that need to happen after a component updates in class components.
- How do you conditionally run the effect only when certain values change?
set certain values on useEffect second argument
- What is the second argument to useEffect used for?
control when the effect runs after the component has been mounted
- How do you simulate componentDidMount with useEffect?
2nd parameter should be passed [] to make it act like componentDidMount
- How do you simulate componentWillUnmount with useEffect?
using the useEffect has method that return empty
- How do you simulate componentDidUpdate with useEffect?
Using the useEffect has method includs setState method and props as second argument. When props value changes, this useEffect is called then other useEffect has state as second argument will be called.
- Can you have side effects in the callback function passed to useState?
no
- Can you have state variables in the callback function passed to useEffect?
yes