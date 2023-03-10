### Props

React, `props` (short for "`properties`") are used to pass data from a parent component to a child component.

When you create a component in React, you can pass it props by including them as attributes on the component when it's used. The child component can then access those props and use them to render its UI.

Here's an example of a simple parent component that passes props to a child component:


```js
import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const greeting = "Hello, World!";
  const name = "Alice";
  return (
    <ChildComponent greeting={greeting} name={name} />
  );
}
```

In this example, we have a parent component called ParentComponent that is passing two props, greeting and name, to a child component called `ChildComponent`.

Now, let's look at how the child component can access and use these props:

```js
import React from 'react';

function ChildComponent(props) {
  return (
    <div>
      <p>{props.greeting} My name is {props.name}.</p>
    </div>
  );
}
```

In this example, we have a child component called ChildComponent that is accepting props as a parameter. We can then access the `greeting` and `name` props using `props.greeting` and `props.name`, respectively.

When `ParentComponent` is rendered, it will pass the values of greeting and name to `ChildComponent` as `props. ChildComponent` can then use those props to render its UI.

Props can be used to pass any type of data, including strings, numbers, objects, and even functions. In addition, props can also be used to control the behavior of a component, such as whether it is visible or not.

Overall, props are an essential part of building reusable and modular UI components in React. They allow you to pass data and behavior down the component tree from parent components to child components.

### State
#### Funcion Based Components

In React, state is a JavaScript object that represents the internal state of a component. It is used to manage data that may change over time and to trigger re-renders of the component when the state changes. In functional components, the useState hook is used to add state to the component.

Here's an example of a simple functional component that uses state:

```js
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

In this example, we have a functional component called Counter that uses the `useState` hook to add state to the component. We define count and setCount by calling `useState(0)`. The initial value of count is 0.

We then define an `increment` function that updates the value of `count` by calling `setCount` with a new value of `count + 1.`

Finally, we render the current value of `count` and a button that calls the `increment` function when it is clicked.

When the `increment` function is called, it updates the state of the Counter component by setting the new value of count. This triggers a re-render of the component with the updated value of count.

State can be used to manage any kind of data that may change over time, such as user input, API responses, or the visibility of UI elements. By using state, we can create dynamic and interactive user interfaces in React.

Overall, state is an important concept in React that allows us to create components that can respond to user input and changes in data. The `useState` hook is a simple and effective way to add state to functional components.

#### Class Based Components

React, state is a JavaScript object that represents the internal state of a component. It is used to manage data that may change over time and to trigger re-renders of the component when the state changes. In class components, state is added by defining a state property in the component's constructor.

Here's an example of a simple class component that uses state:

```js
import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```

In this example, we have a class component called Counter that defines a state object in its constructor. We initialize count to 0.

We also define an increment method that updates the value of count by calling setState with a new value of count + 1.

Finally, we render the current value of count and a button that calls the increment method when it is clicked.

When the increment method is called, it updates the state of the Counter component by setting the new value of count. This triggers a re-render of the component with the updated value of count.

Also In class components, state can be defined using class fields. Here is an example of defining and using state in a class component:

```js
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```

In this example, we define a class component called Counter and define its state using a class field state. We initialize count to 0.

We also define an increment method using an arrow function. The arrow function ensures that this is bound correctly within the method.

When the increment method is called, it updates the state of the Counter component by calling setState with a new value of count + 1.

Finally, we render the current value of count and a button that calls the increment method when it is clicked.

When the increment method is called, it updates the state of the Counter component by setting the new value of count. This triggers a re-render of the component with the updated value of count.