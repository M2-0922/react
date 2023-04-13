### Render Props

Render props is a technique used in React for code reuse. The idea is to pass a function as a prop to a component, which can then use that function to render its content. This allows for more flexible and dynamic components, since the rendering logic is abstracted away into the function that is passed in.

Here's an example of using a render prop:
```js
function Counter(props) {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return <div>{props.render(count, incrementCount)}</div>;
}

function App() {
  return (
    <div className="App">
      <Counter
        render={(count, incrementCount) => (
          <div>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Increment</button>
          </div>
        )}
      />

      <Counter
        render={(count, incrementCount) => (
          <div>
            <p>Double Count: {count * 2}</p>
            <button onClick={incrementCount}>Double Increment</button>
          </div>
        )}
      />
    </div>
  );
}
```

In this example, we have a `Counter` component that takes in a render prop. The render prop is a function that takes in the count and an increment function and returns a React element. The `Counter` component uses the render prop to render the count and an increment button.

The `App` component uses the `Counter` component twice, passing in different render props each time. The first `Counter` component renders the count and an increment button, and the second `Counter` component renders the double of the count and a button that increments the count by 2.

`Use case:` One common use case for render props is for sharing state between components. You can use a render prop to pass a state value and a function to update that value to a child component. The child component can then use the state value and call the update function to change it.

`Lab question`: Create a component that uses a render prop to render a list of items. The render prop should take in an array of items and render them as `<li>` elements.

### Higher Order Components (HOCs)

Higher Order Components (HOCs) are functions that take in a component and return a new component. HOCs are used for code reuse and to add functionality to components without modifying their source code.

Lets say,

```js

const add = (a, b) => a + b
add(1, 2) // 3

const createAdder = (a) => (b) => a + b
// createAdder(1) // (b) => 1 + b
// createAdder gets a and returns a function that takes in b and returns a + b

const add2 = createAdder(2)
add2(3) // 5

// so HOCs is basically createAdder function
// HOCs takes in a component and returns a new component
```

Here's an example of an HOC that adds a `withLogger` function to a component:

```js
function withLogger(WrappedComponent) {
    // WrappedComponent is the component that is passed in
  return function(props) {
    // props is the props that are passed to the component
    console.log(`Rendering ${WrappedComponent.name}`)
    return <WrappedComponent {...props} />
    // return the wrapped component with the props
  }
}

function MyComponent() {
  return <div>Hello, world!</div>
}

const MyComponentWithLogger = withLogger(MyComponent)
```

```js
function withLoading(WrappedComponent) {
    return function(props) {
      if (props.loading) {
        return <div>Loading...</div>;
      } else {
        return <WrappedComponent {...props} />;
      }
    }
}
  
function MyComponent(props) {
    return <div>{props.data}</div>;
}

const MyComponentWithLoading = withLoading(MyComponent);

function App() {
  const [data, setData] = useState("Hello, world!");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      <MyComponentWithLoading data={data} loading={loading} />
    </div>
  );
}
```

In this example, we have an HOC called `withLogger` that takes in a component and returns a new component. The new component logs the name of the wrapped component before rendering it.

The `MyComponentWithLogger` component is a new component that wraps the `MyComponent` component. When the `MyComponentWithLogger` component is rendered, it logs the name of the `MyComponent` component and then renders it.

`Use case:` HOCs are commonly used for adding authentication or authorization to components. You can create an HOC that checks if the user is logged in or has the necessary permissions, and then conditionally render the wrapped component based on that information.

`Lab question:` Create an HOC that adds a `count` prop to a component. The wrapped component should render the count value and a button that increments the count when clicked.

<!-- ### Forwarding Refs -->
### [Forwarding Refs](https://reactjs.org/docs/refs-and-the-dom.html)

Forwarding refs is a technique used in React for passing a ref from a parent component to a child component. This allows the parent component to access the child component's DOM node or instance.

Here's an example of forwarding a ref to a child component:

```jsx
const InputWithRef = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});
  
function App() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  }

  return (
    <div>
      <InputWithRef ref={inputRef} />
      <button onClick={handleClick}>Focus input</button>
    </div>
  );
}
```

In this example, we have a `Child` component that forwards a ref to an `<input>` element. The `Parent` component uses the Child component and creates a ref using `React.useRef()`. The `handleClick` function uses the ref to focus the `<input>` element when the button is clicked.

The Child component doesn't need to know anything about the ref, it just forwards it to the `<input>` element using the `React.forwardRef()` function.

<!-- ```js
const ChildComponent = React.forwardRef((props, ref) => {
  const [count, setCount] = useState(0);
  // define a child method
  const childMethod = () => {
    setCount(count + 1);
    console.log('Child method called');
  }

  // expose the child method through the ref
  useImperativeHandle(ref, () => ({
    childMethod
  }));

  return <div>Hello, world! { count }</div>;
});

// parent component that uses ChildComponent
function App() {
  const childRef = useRef(null);

  const handleClick = () => {
    childRef.current.childMethod();
  }

  return (
    <div>
      <ChildComponent ref={childRef} />
      <button onClick={handleClick}>Call child method</button>
    </div>
  );
}
``` -->

In this example, we have a `Child` component that forwards a ref to a `<div>` element. The `Parent` component uses the Child component and creates a ref using `React.useRef()`. The `handleClick` function uses the ref to call the `childMethod` function when the button is clicked.

The Child component doesn't need to know anything about the ref, it just forwards it to the `<div>` element using the `React.forwardRef()` function. The `childMethod` function is exposed through the ref using the `React.useImperativeHandle()` hook.

`Use case:` Forwarding refs is commonly used when creating custom input components. You can forward a ref to the underlying `<input>` element and allow the parent component to access its value or call its methods.

`Lab question`: Create a component that forwards a ref to a child component and logs the child component's props when it is clicked.

### [Error Boundaries](https://reactjs.org/docs/error-boundaries.html)

Error boundaries are a feature in React that allow you to handle errors in your application. An error boundary is a component that catches errors that occur in its child components and displays a fallback UI instead of crashing the entire application.

Here's an example of using an error boundary:

```js
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong!</div>;
    }
    return this.props.children;
  }
}

function Child() {
  throw new Error("Error!");
  // return <div>Hello, world!</div>
}

function App() {
  return (
    <ErrorBoundary>
      <Child />
    </ErrorBoundary>
  );
}
```

In this example, we have an error boundary component that catches errors that occur in its child components. The error boundary component displays a message when an error occurs.

`Use case:` Error boundaries are useful for handling errors that occur in third-party libraries or in components that you don't control. You can wrap these components in an error boundary to prevent the entire application from crashing.

`Lab question:` Create an error boundary component that displays a message when an error occurs in its child components. Use the error message as part of the message.

### [Pure Components](https://reactjs.org/docs/react-api.html#reactpurecomponent)

Pure components are a type of component in React that only rerender when their props or state change. This is because pure components implement a `shouldComponentUpdate` method that compares the current props and state to the previous props and state. If they are the same, the component won't rerender.

Here's an example of a pure component:

```js
class MyComponent extends React.PureComponent {
  render() {
    return <div>{this.props.message}</div>
  }
}

function Parent() {
  const [count, setCount] = React.useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div>
      <MyComponent message={`Count: ${count}`} />
      <button onClick={handleClick}>Increment Count</button>
    </div>
  )
}
```

In this example, we have a `MyComponent` pure component that renders a `<div>` with a message prop. The Parent component uses the `MyComponent` component and updates the count state when the button is clicked.

The `MyComponent` component only rerenders when the `message` prop changes, which means that it won't rerender when the `count` state changes. This can improve performance in larger applications with complex component trees.

Use case: Pure components are useful for improving performance in applications with complex component trees. They can prevent unnecessary rerenders and improve the overall performance of the application.

Lab question: Create a pure component that renders a list of items. The component should only rerender when the list of items changes.

### React.memo()

`React.memo()` is a higher-order component that is used to optimize functional components by reducing unnecessary re-renders. It works by caching the previous result and comparing it to the current result to determine whether to re-render the component.

Here's an example of how to use React.memo() to optimize a functional component:

```js
function Greeting({ name }) {
  console.log('Rendering Greeting component');
  return <div>Hello, {name}!</div>;
}

// memoized version of the Greeting component
const MemoizedGreeting = React.memo(Greeting);

// parent component that uses the Greeting component
function App() {
  const [name, setName] = React.useState('world');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <MemoizedGreeting name={name} />
      <input type="text" value={name} onChange={handleChange} />
    </div>
  );
}
```

In this example, we're defining a functional component called Greeting that accepts a name prop and logs a message to the console when it's rendered.

We're then using the React.memo() function to create a memoized version of the Greeting component called MemoizedGreeting. This version of the component will only re-render if its props have changed.

We're using the MemoizedGreeting component in the App component and passing a name prop to it. We're also defining an input element that allows the user to change the name prop.

When the user types in the input element, the name state in the App component changes and triggers a re-render of the App component. However, since the MemoizedGreeting component is memoized, it only re-renders if its name prop has changed.

React.memo() is a higher-order component that is used to optimize functional components by reducing unnecessary re-renders. It works by caching the previous result and comparing it to the current result to determine whether to re-render the component.

Here's an example of how to use React.memo() to optimize a functional component:

```js
import React from 'react';

// functional component that accepts a name prop
function Greeting({ name }) {
  console.log('Rendering Greeting component');
  return <div>Hello, {name}!</div>;
}

// memoized version of the Greeting component
const MemoizedGreeting = React.memo(Greeting);

// parent component that uses the Greeting component
function App() {
  const [name, setName] = React.useState('world');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <MemoizedGreeting name={name} />
      <input type="text" value={name} onChange={handleChange} />
    </div>
  );
}
```

In this example, we're defining a functional component called `Greeting` that accepts a `name` prop and logs a message to the console when it's rendered.

We're then using the `React.memo()` function to create a memoized version of the `Greeting` component called `MemoizedGreeting`. This version of the component will only re-render if its props have changed.

We're using the `MemoizedGreeting` component in the `App` component and passing a `name` prop to it. We're also defining an `input` element that allows the user to change the `name` prop.

When the user types in the input element, the `name` state in the `App` component changes and triggers a re-render of the `App` component. However, since the `MemoizedGreeting` component is memoized, it only re-renders if its `name` prop has changed.

As a result, the message "Rendering Greeting component" is only logged to the console when the `name` prop changes, and not on every re-render.

### Compound Components

Compound components are a design pattern in React that allow you to create a group of components that work together to create a more complex UI. Compound components are composed of multiple components that share state and behavior, but are rendered separately.

Here's an example of a compound component:

```js
const ToggleContext = React.createContext()

function Toggle(props) {
  const [on, setOn] = React.useState(false)

  function toggle() {
    setOn(!on)
  }

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {props.children}
    </ToggleContext.Provider>
  )
}

function ToggleOn(props) {
  const { on } = React.useContext(ToggleContext)
  return on ? props.children : null
}

function ToggleOff(props) {
  const { on } = React.useContext(ToggleContext)
  return on ? null : props.children
}

function ToggleButton(props) {
  const { on, toggle } = React.useContext(ToggleContext)
  return <button onClick={toggle}>{on ? 'On' : 'Off'}</button>
}

function Parent() {
  return (
    <Toggle>
      <ToggleOn>The button is on</ToggleOn>
      <ToggleOff>The button is off</ToggleOff>
      <hr />
      <ToggleButton />
    </Toggle>
  )
}
```

In this example, we have a `Toggle` compound component that manages the state of a toggle button. The `ToggleOn`, `ToggleOff`, and `ToggleButton` components are all part of the Toggle component and share the same context.

The `Parent` component uses the `Toggle` component to render the toggle button and its state. The `ToggleOn` and `ToggleOff` components only render their children if the button is on or off, respectively. The `ToggleButton` component renders a button that toggles the state of the Toggle component when clicked.

Use case: Compound components are useful for creating complex UIs that require multiple components to share state and behavior. They can improve the reusability and maintainability of your code by encapsulating related functionality.

`Lab question:` Create a compound component that renders a form with multiple input fields. The component should manage the state of the inputs and provide a way for the parent component to submit the form.

[React-Pattern](https://reactpatterns.com/)