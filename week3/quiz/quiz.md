What is the purpose of the useState hook?
Add state to react components to change or update

~
What is the syntax for using useState in a functional component?
const [something, setSomething] = useState(‘example’);

return <div>{something}</div>
~

What is the default value of a state variable initialized with useState?
const [count, setCount] = useState(0);

Can you update multiple state variables with a single call to useState?
/

How do you update a state variable with useState?
Like this:
const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
~
}

What is the purpose of the useEffect hook?
To manage the side-effects from something like external system

What is the syntax for using useEffect in a functional component?
  useEffect(() => {
    fetch('https://example.com/')
	~
  }, []);


When does the callback function passed to useEffect get called?

Can you use useEffect more than once in a single component?
After the DOM updated

How do you unsubscribe from a subscription created in a useEffect hook?
/

What is the difference between useEffect and componentDidMount in a class component?
What is the difference between useEffect and componentWillUnmount in a class component?
What is the difference between useEffect and componentDidUpdate in a class component?
The main difference between them is below:
 - useEffect : It is a functional method (can be called multiple times)
 - component… : a method is in class component way

How do you conditionally run the effect only when certain values change?
/

What is the second argument to useEffect used for?
It is an optimal array and use it as blank or add something depends on the situation

How do you simulate componentDidMount with useEffect?
How do you simulate componentWillUnmount with useEffect?
How do you simulate componentDidUpdate with useEffect?
Like this below:

function Example() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://~’)
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>Data:</p>
      <ul>
        {data.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}


Can you have side effects in the callback function passed to useState?
No

Can you have state variables in the callback function passed to useEffect?
Yes
