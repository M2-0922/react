- What is React? Can you explain its main features and advantages over other JavaScript frameworks?

```js
React is a front-end JavaScript framework for building composable user interfaces. It's an open-source and component-based framework. React follows the model View Controller (MVC) architecture. Components are core concept of React, which can split the UI into independent, reusable pieces.
React can be written in JSX and it let us be able to write HTML structures in the same file that contains JavaScript code.

```

- What is the Virtual DOM in React? How does it help in optimizing the performance of the application?

```js
React contains a light-weight representation of real DOM in memory called Virtual DOM. When any object's state changes, VDOM can modify only target object in real DOM, which make application faster.

```

- What is the difference between state and props in React?

```js
state:
It is used to manage the data in its own component.
It's modified only in its own component and cannot be accessed from outside.
props:
It is used to pass the data to other components.
It is read-only and cannot be modified by a component.
It is passed only from parent component to child component.
```

- What are React Hooks? How do they simplify the process of writing functional components?

```js
Hooks are JavaScript functions that manage the state's behaviour and side effects by isolating them from a component. Hooks allow us to reuse stateful logic without changing our component hierarchy. This makes it easy to share Hooks among many components and makes it simple to write codes.
```

- What are the lifecycle methods of a React component? Explain each one.

```js
React components will have gone through its mounting, updating and unmounting phase before rendering. And each react lifecycle has a number of lifecycle methods.

>Mounting lifecycle methods
1.constructor()
The first method called before the components is mounted to the DOM.
2.static getDerivedStateFromProps()
The method to ensure that the state and props are in sync for when it's required.
3.render()
The method to render elements to the DOM.
4.componentDidMount()
The method is invoked immediately after the component is mounted to the DOM by render method.
>Updating lifecycle methods
1.static getDerivedStateFromProps()
The first method called in updating phase to ensure that the state and props are in sync for when it's required.
2.shouldComponentUpdate()
The method to control if the component is re-rendered when state or props changes.
3.render()
The method to render or re-render elements to the DOM depending on the returned value from shouldComponentUpdate.
4.getSnapshotBeforeUpdate()
The method to store the previous values of the state after the DOM is updated after rendering.
5.componentDidUpdate()
The method invoked after getSnapshotBeforeUpdate method. It receives the previous props and state, and also can receive the returned value from getSnapshotBeforeUpdate method as arguments.
>Unmounting lifecycle method
1.componentWillUnmount()
The method invoked immediately before a component is unmounted and destroyed. It is mainly used for cleanup.

```

- How does React handle errors and exceptions in the application?

```js
An Error boundary, which is a special component that lets us display some fallback UI, can be used to prevent that React will remove its UI from the screen when error occurred. These 2 methods to handle error behaviour.

1.static getDerivedStateFromError()
The method called when a child component throws an error during rendering. It receives the error and returns the state telling the component to display the error message.
2.componentDidCatch()
The method to log an error to an error reporting service in production the child component throws the error.
```

- What is JSX in React? How does it differ from HTML and what are the benefits of using it?

```js
JSX is a syntax extension for JavaScript that lets us write HTML-like markup inside a JavaScript file.
There are some rules in JSX compared to HTML. It must wrap multiple elements with a single parent tag to return them from a component. All tags must be closed. Some attribute names are written in camelCase because they can't contain dashes or reserved words in JavaScript.
The benefit of JSX is to be able to render logic and markup live together in the same components and make the application interactive.
```

- What is the difference between controlled and uncontrolled components in React? When would you use each one?

```js
Uncontrolled components cannot be influenced by parent component, in contrast, controlled components are driven by props from parent component.
Uncontrolled components are easier to use within their parents because they require less configuration, but they're less flexible. Controlled components requires the parent components to configure them with props, but they are flexible and can be coordinate together.
Uncontrolled components are suitable for independent elements, controlled components are suitable for coordinated elements.
```

- What is Redux? How does it integrate with React? What are its core principles?

```js
Redux is a predictable state container for JavaScript application. It is a state management tool and can be used in any JavaScript project by installing Redux.
Redux can manage the state with 'store' and the state can be updated only by dispatch action. All components access the store through 'reducer' and 'actions'.
```

- What are some best practices for writing efficient and maintainable React code?

```js
1. import modules in order by module types
2. decide clear folder / file / component naming rule
3. Use snippet library for faster development
4. lazy loading for user experience
5. Use custom hooks to reuse same logics
6. log and handle errors

```
