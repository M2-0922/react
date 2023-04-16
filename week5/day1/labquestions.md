`Lab question 1`: Create a component that forwards a ref to a child component and logs the child component's props when it is clicked.

```js
import { useRef } from "react";

const ChildComponent = React.forwardRef((props, ref) => {
    function handleClick () {
        console.log(props);
    }

    return <input ref={ref} onClick={handleClick} />
})

function Parent(){
    const inputRef = useRef(null);

    return <ChildComponent ref={inputRef} />
}
```

`Lab question 2`: Create an error boundary component that displays a message when an error occurs in its child components. Use the error message as part of the message.


```js

import React, { Component } from 'react';

class MyComponent extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>you got un error</h1>;
    }
    return <div>{/* components */}</div>;
  }
}

```

`Lab question 3`: Create a pure component that renders a list of items. The component should only rerender when the list of items changes.

```js

import React, { PureComponent } from 'react';

class MyList extends PureComponent {
  render() {
    const { items } = this.props;

    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    );
  }
}


```

`Lab question 4`: Create a compound component that renders a form with multiple input fields. The component should manage the state of the inputs and provide a way for the parent component to submit the form.

```js

import React, { Component } from 'react';

class Form extends Component {
  static Input = ({ name, value, onChange }) => (
    <input name={name} value={value} onChange={onChange} />
  );

  state = {
    values: {},
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      values: {
        ...prevState.values,
        [name]: value,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { values } = this.state;
    onSubmit(values);
  };

  render() {
    const { children } = this.props;
    const { values } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            value: values[child.props.name] || '',
            onChange: this.handleInputChange,
          })
        )}
        <button type="submit">Submit</button>
      </form>
    );
  }
}


```