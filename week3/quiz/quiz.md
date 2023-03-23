- What is the purpose of the useState hook?
 to track state in a function component.

- What is the syntax for using useState in a functional component?
 function (){
    const [] = useState(");
    return
 }
- What is the default value of a state variable initialized with useState?
 its argument
- Can you update multiple state variables with a single call to useState?
 No you can't
- How do you update a state variable with useState?
 use setState()
- What is the purpose of the useEffect hook?
 to perform side effects in your components.
 This can clean up the function.maybe.I don't know.
- What is the syntax for using useEffect in a functional component?
  useEffect(() => {
    // Update the document title using the browser API
  });
- When does the callback function passed to useEffect get called?
 after the component has been rendered
- Can you use useEffect more than once in a single component?
 yes.
- How do you unsubscribe from a subscription created in a useEffect hook?
 you can write clean up function to unscribe.
- What is the difference between useEffect and componentDidMount in a class component?
 componentDidMount is called when the component is mounted to the DOM.
 Whereas useEffect is called every time the component is rendered.
- What is the difference between useEffect and componentWillUnmount in a class component?
 componentWillUnmount is called right BEFORE the component is removed from the DOM.
 This clean up and unsubscribe the component that was created componentDidMount().
 useEffect is called AFTER the component is rendered.
- What is the difference between useEffect and componentDidUpdate in a class component?
 componentDidUpdate is a part of lifecycle method, and this is called AFTER the conponent is updated.

- How do you conditionally run the effect only when certain values change?
 you can set second parimeter of useEffect.
- What is the second argument to useEffect used for?
 When you set second parimeter of useEffect, the function rus again and again as long as the value is different from the consequence.
- How do you simulate componentDidMount with useEffect?
 no second parimater can do this.
- How do you simulate componentWillUnmount with useEffect?
 you can write clean up function inside return.
- How do you simulate componentDidUpdate with useEffect?
 Set second argument and write callback function
- Can you have side effects in the callback function passed to useState?
 Technically, yes?
- Can you have state variables in the callback function passed to useEffect?
 yes?