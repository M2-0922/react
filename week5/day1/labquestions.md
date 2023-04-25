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

`Lab question 2`: Create an error boundary component that displays a message when an error occurs in its chi'ld components. Use the error message as part of the message.

```js
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, errorMessage: error.message };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <div>Error: {this.state.errorMessage}</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

`Lab question 3`: Create a pure component that renders a list of items. The component should only rerender when the list of items changes.

```js
import React, { PureComponent } from 'react';

class ItemList extends PureComponent {
  render() {
    const { items } = this.props;
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    );
  }
}

export default ItemList;
```

`Lab question 4`: Create a compound component that renders a form with multiple input fields. The component should manage the state of the inputs and provide a way for the parent component to submit the form.

```js
import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    email: '',
    message: ''
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, email, message } = this.state;
    // Do something with the form data (e.g. submit it to a server)
    console.log({ name, email, message });
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={message}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
```