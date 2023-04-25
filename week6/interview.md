
- What is React? Can you explain its main features and advantages over other JavaScript frameworks?<br>
It is a JavaScript library for building UI parts on websites.<br>
In react, components are separated by part and making it easy to customize.<br>

- What is the Virtual DOM in React? How does it help in optimizing the performance of the application?<br>
The virtual DOM is building a temporary DOM created programmatically before rendering the browser.<br>
The virtual DOM is compared before and after page changes, and only the information that has changed is <br>quickly found and reflected in the real DOM, so changes are kept to a minimum.<br>

- What is the difference between state and props in React?<br>
State is the local state of the component which cannot be accessed and modified outside of the component.<br>
Props make components reusable by giving components the ability to receive data from their parent component in the form of props.<br>

- What are React Hooks? How do they simplify the process of writing functional components?<br>
React Hooks are functions that allow developers to use state and other React features in functional components.<br>

- What are the lifecycle methods of a React component? Explain each one.<br>
Lifecycle methods that allow developers to control the behavior of the component at different points in its lifecycle.<br>
Mounting: The period of time it takes for Component to appear.<br>
Updating: The period of time during which the Component is displayed and the State is updated.<br>
Unmounting: A period of time called only when moving to another Component.<br>

- How does React handle errors and exceptions in the application?<br>
Using try-catch blocks to handle errors that occur within a component's render method.<br>

- What is JSX in React? How does it differ from HTML and what are the benefits of using it?<br>
JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods.<br>

- What is the difference between controlled and uncontrolled components in React? When would you use each one?<br>
It refers to how the component manages and updates its state.<br>
A controlled component is a component that manages its state through props passed down from its parent component. It has better control over the form elements and data.<br>
An uncontrolled component, on the other hand, manages its state internally using the component's own state. Data is controlled by the DOM itself.<br>

- What is Redux? How does it integrate with React? What are its core principles?<br>
Redux is a state management library for JavaScript applications.<br>
Redux integrates with React through the use of the react-redux library.<br>
It is a framework for managing and updating the State of an application using events called "Actions". It helps to centrally manage States that are needed in many parts of the application as global States.<br>

- What are some best practices for writing efficient and maintainable React code?<br>
Use functional component, hooks, reusable components.