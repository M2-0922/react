`Lab question 1`
```js
 import { useRef } from 'react';

function App(){
    const ref = useRef(null);
    let count = 0;

    const handleClick= () => {
        ref.current.focus();
        count++;
        console.log("You clicked" + count + "times.");
    }

    return (
        <button onClick={handleClick}>Click!</button>
    );

}
```

`Lab question 2`
```js
class ErrorBoundary extends React.Component {
    constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
    //This lifecycle is used to draw the fallback UI. 
    //It is called when an error is thrown by a child or grandchild component.
    static getDerivedStateFromError(error) {
    return { hasError: true };
    }

    //This life cycle is primarily used for logging and other processes.
    componentDidCatch(error, errorInfo) {
    logErrorToMyService(error, errorInfo);
  }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children; 
    }
}

function Child() {
  throw new Error("Error!");
}

function App() {
  return (
    <ErrorBoundary>
      <Child />
    </ErrorBoundary>
  );
}
```

`Lab question 3`: Create a pure component that renders a list of items. The component should only rerender when the list of items changes.
```js
class MyComponent extends React.PureComponent {
    render() {
    return <div>{this.props.message}</div>
  }
}

function ClickAction(){
     const [count, setCount] = React.useState(0);

    function handleClick() {
        setCount(count + 1)
  }

  return (
    <div>
      <MyComponent message={`You clicked : ${count}`' times!'} />
      <button onClick={handleClick}>Increment Count</button>
    </div>
  )
}
```

`Lab question 4`: Create a compound component that renders a form with multiple input fields. The component should manage the state of the inputs and provide a way for the parent component to submit the form.
```js
const ToggleContext = React.createContext();

function Toggle(props) {
  const [on, setOn] = useState(false);
  const providerValue = { on, toggle };

  return (
    <ToggleContext.Provider value={providerValue}>
      {props.children}
    </ToggleContext.Provider>
  );

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
        return <button onClick={toggle}>{on ? 'on' : 'Off'}</button>
    }
}

function Parents() {
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