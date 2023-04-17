`Lab question 1`: Create a component that forwards a ref to a child component and logs the child component's props when it is clicked.

```js
import { useRef } from "react";

const ChildComponent = React.forwardRef((props, ref) => {
  function handleClick() {
    console.log(props);
  }

  return <input ref={ref} onClick={handleClick} />;
});

function Parent() {
  const inputRef = useRef(null);

  return <ChildComponent ref={inputRef} />;
}
```

`Lab question 2`: Create an error boundary component that displays a message when an error occurs in its child components. Use the error message as part of the message.

```js
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.message };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong: {this.state.errorMessage}</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

```js
import React from "react";
import ErrorBoundary from "./ErrorBoundary";

const ChildComponent = () => {
  throw new Error("Something went wrong!");
  return <div>Hello, World!</div>;
};

const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <ChildComponent />
      </ErrorBoundary>
    </div>
  );
};

export default App;
```

`Lab question 3`: Create a pure component that renders a list of items. The component should only rerender when the list of items changes.

```js
import React, { PureComponent } from "react";

class ItemList extends PureComponent {
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

export default ItemList;
```

```js
import React from "react";
import ItemList from "./ItemList";

const App = () => {
  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ];

  return (
    <div>
      <h1>My Items</h1>
      <ItemList items={items} />
    </div>
  );
};

export default App;
```

`Lab question 4`: Create a compound component that renders a form with multiple input fields. The component should manage the state of the inputs and provide a way for the parent component to submit the form.

```js
import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, email, message } = this.state;
    // Call submit callback passed from parent component
    this.props.onSubmit({ name, email, message });
  }

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
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={message}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
```

```js
import React from "react";
import Form from "./Form";

const App = () => {
  const handleSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
```
