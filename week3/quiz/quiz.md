1.What is the purpose of the useState hook?

-   The useState hook is a feature in React that allows you to add state to a functional component.

2.What is the syntax for using useState in a functional component?

-   To beginning, you have to import useState from react. Then you can set two value with array at inside of component which are current value and a function that can be used to update the state. Then you need to set handleClick.

3.What is the default value of a state variable initialized with useState?

-   It depends on the initial value. If you pass an argument to useState like useState(0), then the default value of the state variable will be the value passed to the useState function, in this case, 0.

4.Can you update multiple state variables with a single call to useState?

-   No

5.How do you update a state variable with useState?

-   To update a state variable with useState, you need to call the update function returned by the useState hook.

6.What is the purpose of the useEffect hook?

-   The useEffect hook in React is used to manage side effects in functional components.

7.What is the syntax for using useEffect in a functional component?

-   To beginning, you have to import useEffect from react. Then you can set the useEffect function at inside of component.
-   The first argument to useEffect is the effect function, which is a function that performs a side effect when the component renders. This function can optionally return a cleanup function to clean up any resources used by the side effect. The effect function is called after every render cycle of the component.
-   The second argument to useEffect is an optional array of dependencies. This array contains values that the effect function depends on. If any of the dependencies change, the effect function will be called again. If the array is empty, the effect function will only be called once, after the initial render.
-   The return statement inside the effect function is used to define the cleanup function. This function is called when the component is unmounted or before the effect function is called again.

8.When does the callback function passed to useEffect get called?

-   The callback function passed to the useEffect hook is called after the component has rendered for the first time, and then again after each subsequent render, unless the dependency array (second argument) is specified and the dependencies have not changed.

9.Can you use useEffect more than once in a single component?

-   Yes

10.How do you unsubscribe from a subscription created in a useEffect hook?

-   you can return a cleanup function from the effect function. The cleanup function will be called before the component unmounts, or before the effect function is called again if any of the dependencies have changed.

11.What is the difference between useEffect and componentDidMount in a class component?

-   useEffect can be called multiple times in a single component, whereas componentDidMount is only called once.

12.What is the difference between useEffect and componentWillUnmount in a class component?

-   useEffect can be called multiple times in a single component, whereas componentWillUnmount is only called once.

13.What is the difference between useEffect and componentDidUpdate in a class component?

-   useEffect can be called multiple times in a single component, whereas componentDidUpdate is only called once.

14.How do you conditionally run the effect only when certain values change?

-   You can conditionally run the effect only when certain values change by passing an array of dependencies as the second argument to useEffect.

15.What is the second argument to useEffect used for?

-   It's an optional array of dependencies. This array is used to tell React when the effect should be re-run.

16.How do you simulate componentDidMount with useEffect?

-   You can simulate componentDidMount with useEffect by passing an empty array ([]) as the second argument to the useEffect function.

17.How do you simulate componentWillUnmount with useEffect?

-   You can simulate componentWillUnmount with useEffect by returning a cleanup function from the effect function.

18.How do you simulate componentDidUpdate with useEffect?

-   You can simulate componentDidUpdate with useEffect by not passing a second argument or passing an array of dependencies as the second argument to the useEffect function. The effect function will then run after every update.
    19.Can you have side effects in the callback function passed to useState?
-   No

20.Can you have state variables in the callback function passed to useEffect?

-   Yes
