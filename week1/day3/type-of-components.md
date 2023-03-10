### Class Based Components and Functional Components

`Class Based Components` are created by extending the React.Component class and providing an implementation for the render() method. These components can also define their own state and lifecycle methods.

Here's an example of a simple Class Based Component:

```js
import React from 'react';

class MyComponent extends React.Component {
  ...
  
  handleClick() {
    ...
  }
  
  render() {
    return (
      <div>
        <p>You clicked {...} times</p>
        <button onClick={() => ...}>Click me</button>
      </div>
    );
  }
}
```

In this example, we've defined a `Class Based Component` called `MyComponent` that keeps track of a count and updates it when the user clicks the "Click me" button. This component defines its own state and handles updates using the `setState()` method.

`Functional Components` are simpler than `Class Based Components` and are defined as JavaScript functions that take in props as input and return JSX as output. They do not have their own state or lifecycle methods, and are typically used for simpler UI components.

Here's an example of a simple Functional Component:

```js   
import React from 'react';

function Greeting(...) {
  return <h1>Hello, {...}!</h1>;
}
```

In this example, we've defined a Functional Component called Greeting that takes in a prop called name and uses it to render a greeting message.

`Functional Components` are typically easier to write and understand than `Class Based Components`, and are often used for simpler UI components like buttons, text inputs, and so on.

Both Class Based Components and `Functional Components` have their own advantages and disadvantages, and choosing which one to use depends on the specific needs of your application.