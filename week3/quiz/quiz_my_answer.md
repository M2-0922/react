- What is the purpose of the useState hook?\
  To track the state in the application and update the screen when the state value is updated.

- What is the syntax for using useState in a functional component?\
  const [stateName, functionNameToUpdateState] = useState(initialValue)

- What is the default value of a state variable initialized with useState?\
  undefined

- Can you update multiple state variables with a single call to useState?\
  No, useState call is necessary for each variable.

- How do you update a state variable with useState?\
  functionNameToUpdateState(valueForUpdate)

- What is the purpose of the useEffect hook?\
  To set side effects for the component, such as like fetching data or timers

- What is the syntax for using useEffect in a functional component?\
  useEffect(function, [dependency])

- When does the callback function passed to useEffect get called?\
  Timing change depending on the second argument\
  No dependency: every time the component rendered\
  empty array: the component firstly rendered\
  some parameter or state: every time the parameter or state are updated

- Can you use useEffect more than once in a single component?\
  Yes

- How do you unsubscribe from a subscription created in a useEffect hook?\
  Return the cleanup (unsubscribe) function in the function which is the first argument of useEffect

- What is the difference between useEffect and componentDidMount in a class component?\
  componentDidMount works only when the component is mounted (firstly created and inserted into DOM)\
  useEffect works when the component is not only mounted and but also updated (re-rendered)

- What is the difference between useEffect and componentWillUnmount in a class component?\
  componentWillUnmount works only when the component is unmounted (removed from DOM)\
  useEffect doesn't work when the component is unmounted

- What is the difference between useEffect and componentDidUpdate in a class component?\
  componentDidMount works only when the component is updated\
  useEffect works when the component is mounted and updated (re-rendered)

- How do you conditionally run the effect only when certain values change?\
  add the name of target value in the array which is the second argument of useEffect

- What is the second argument to useEffect used for?\
  To make callback function works only when the props or states in the second argument are changed

- How do you simulate componentDidMount with useEffect?\
  set the second argument of useEffect as empty array []

- How do you simulate componentWillUnmount with useEffect?\
  return a function in the first argument function of useEffect

- How do you simulate componentDidUpdate with useEffect?\
  add the name of all dependency target in the array which is the second argument of useEffect

- Can you have side effects in the callback function passed to useState?\
  No

- Can you have state variables in the callback function passed to useEffect?\
  Yes
