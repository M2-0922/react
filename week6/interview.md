
- What is React? Can you explain its main features and advantages over other JavaScript frameworks?
```js
// explain here
React is a COMPONENT BASED framework created by Facebook, one of its many features is that you can do SINGLE PAGE APPLICATIONS,
React rewrites the web page data, getting it from the web server, consequently being faster.
Besides that it has other features like a VIRTUAL DOM and LIFECYCLES.

```
- What is the Virtual DOM in React? How does it help in optimizing the performance of the application?
```js
// explain here
The Virtual DOM is a technique used by React to make updating the user interface faster and more efficient. It's like a blueprint of the UI that React uses to figure out what needs to be updated when changes are made.

```
- What is the difference between state and props in React?
```js
// explain here
State represents the internal state of a component, and it can only be changed by the component itself.
Props, on the other hand, are properties passed to a component from its parent component. They are read-only and cannot be changed by the component itself.

```
- What are React Hooks? How do they simplify the process of writing functional components?
```js
// explain here
State is used to manage data within a component, while props are used to pass data from a parent component to a child component.

```
- What are the lifecycle methods of a React component? Explain each one.
```js
// explain here
Methods that exist to execute functions at a certain timing of a component life

componentWillMount- ends before initial rendering
componentDidMount- after rendering
componentWillReceiveProps- when it receives new props
shouldComponentUpdate- before rendering, or after receiving new props or state (can return false)
componentWillUpdate- before rendering, or after receiving new props or state
componentDidUpdate- after component updates are flushed to DOM
componentWillUnmount- immediately before removing component from DOM

```
- How does React handle errors and exceptions in the application?
```js
// explain here
At the component level, React provides a method called componentDidCatch() that can be used to catch errors that occur during rendering of child components.
At the application level, React provides an error boundary component that can be used to catch errors that occur anywhere in the application
```
- What is JSX in React? How does it differ from HTML and what are the benefits of using it?
```js
// explain here
JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your React components. It looks similar to HTML, but it is actually a way to define the structure and content of a component's UI.
```
- What is the difference between controlled and uncontrolled components in React? When would you use each one?
```js
// explain here
Controlled components are those whose state is controlled by React. Normally, they are used when u need to control the user's input.
Uncontrolled components, on the other hand, manage their own state internally.
```
- What is Redux? How does it integrate with React? What are its core principles?
```js
// explain here
Redux is a state management library for JavaScript applications.
The core principles of Redux are:
Single source of truth;
State is read-only;
Dispatch function
```
- What are some best practices for writing efficient and maintainable React code?
```js
// explain here
Use functional components and hooks, keep components small, use props and state (and redux to manage them),
do tests in the app and use perfomances optimizations.
```