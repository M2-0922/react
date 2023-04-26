
- What is React? Can you explain its main features and advantages over other JavaScript frameworks?
```js
React is a JavaScript library for building user interfaces.
It has especially three features of ‘Declarative’, ‘Component-Based’, and ‘Learn Once, Write Anywhere’.
```
- What is the Virtual DOM in React? How does it help in optimizing the performance of the application?
```js
It refers to building a temporary DOM that is created programmatically first, rather than rendering the browser immediately after receiving the information. And also it compares the before and after changes and reflects only the difference in changes in the real DOM, so it helps to minimize changes and improving performance.
```
- What is the difference between state and props in React?
```js
State is variable data. It’s held by the component itself and is not passed from component to component.
Props are immutable data. They’re  passed from the parent to the child component.
```
- What are React Hooks? How do they simplify the process of writing functional components?
```js
It’s an ability to write React without using classes. 
Hooks such as useState and useEffect can be used to keep things simple with less code than class components.
```
- What are the lifecycle methods of a React component? Explain each one.
```js
1. The mounting phase
    - In the mounting phase, a component is prepared for and actually inserted into the DOM.
2. The updating phase    
    - The Updating phase is triggered when component props or state change.
3. The unmounting phase
    - The unmounting phase is the third and final phase of a React component. At this phase, the component is removed from the DOM.
```
- How does React handle errors and exceptions in the application?
```js
Use the error boundary to catch errors that occur during rendering of the entire tree under it, in lifecycle methods, and in constructors.
```
- What is JSX in React? How does it differ from HTML and what are the benefits of using it?
```js
It extends JavaScript so that HTML tag syntax can be used to describe UI elements. 
1. It has its own attributes.
2. Some attributes cannot be used.
    - Since class and for are also used in JavaScript, they cannot be used as attributes and must be replaced with className and htmlFor.
```
- What is the difference between controlled and uncontrolled components in React? When would you use each one?
```js
Controlled components use state to manage user input values and use when you want constant access to values or proper control over form elements and data.
Uncontrolled Component use the DOM to manage form input values and use when you want to easily pass values to non-React code.
```
- What is Redux? How does it integrate with React? What are its core principles?
```js
It is Javascript library used to manage state in web applications. 
Use two libraries: redux library and react-redux library.
Using redux can centralize data by allowing any component to access shared data in the same way.
```
- What are some best practices for writing efficient and maintainable React code?
```js
- Maintain a clear folder structure
- Structure the import order
- Implement delayed loading
- Log and manage errors
- Use function components, etc.
```