- What is React? Can you explain its main features and advantages over other JavaScript frameworks?
  React is an open source JavaScript library for building user interfaces.
  It is built on a component-based architecture that allows us make it easier to maintain and update large applications.

- What is the Virtual DOM in React? How does it help in optimizing the performance of the application?
  Virtual DOM is a lightweight representation of the actual DOM. 
  It allows React to update only the necessary components when changes are made, rather than re-rendering the entire page. 

- What is the difference between state and props in React?
  State is created and managed within the component itself, and can be updated using the setState method. It is mutable, which means it can be changed over time, and is used to store data that can change frequently.
  props (short for "properties") are passed down to a component from its parent component. They are immutable, meaning they cannot be changed within the component, and are used to pass data and behavior from one component to another.

- What are React Hooks? How do they simplify the process of writing functional components?
  React Hooks are a new feature introduced in React 16.8 that allow developers to use state and other React features in functional components, instead of only in class components. 
  Hooks simplify the process of writing functional components by allowing developers to use state and other React features in a more straightforward way. 

- What are the lifecycle methods of a React component? Explain each one.
  1. Mounting methods: These methods are called when a component is first created and added to the DOM.
    - constructor(props): This method is called when a component is first created, and it is used to initialize the component's state and bind event handlers.
    - render(): This method is called every time the component's state or props change, and it returns the React elements that represent the component's UI.
    - componentDidMount(): This method is called after the component is mounted on the page, and it is used to perform any setup that requires access to the DOM, such as setting up event listeners or fetching data from an API.

  2. Updating methods: These methods are called when a component's state or props change.
      - shouldComponentUpdate(nextProps, nextState): This method is called before the component is updated, and it is used to determine if the component should update or not. By default, React re-renders a component whenever its state or props change, but this method can be used to optimize performance by preventing unnecessary re-renders.
      - render(): This method is called again to update the component's UI based on the updated state or props.
      - componentDidUpdate(prevProps, prevState): This method is called after the component is updated, and it is used to perform any side effects that require access to the updated state or props, such as updating the DOM or sending data to an API.

  3. Unmounting methods: These methods are called when a component is removed from the DOM.
      - componentWillUnmount(): This method is called when the component is about to be removed from the page, and it is used to perform any cleanup that needs to happen before the component is removed, such as removing event listeners or cancelling any API requests.

- How does React handle errors and exceptions in the application?
  React provides several mechanisms to handle errors and exceptions, including error boundaries, try-catch blocks, and event listeners.

- What is JSX in React? How does it differ from HTML and what are the benefits of using it?
  JSX is a syntax extension for JavaScript that allows developers to write HTML-like code in their JavaScript code. JSX is used extensively in React to describe the UI elements of a component. 

- What is the difference between controlled and uncontrolled components in React? When would you use each one?
  Controlled Components:
    A controlled component is a React component that manages its state through props passed down from its parent component. It is useful when we want to have full control over the input data. This is especially useful when we need to validate input data, format it, or pass it to other components as props.
  Uncontrolled Components:
  An uncontrolled component is a React component that manages its state internally, using a ref to reference the input element. The input value is not controlled by the parent component, and changes to the input value are handled by the browser. It is  useful when we want a simpler implementation, and we don't need to do any validation or formatting of the input data. 

- What is Redux? How does it integrate with React? What are its core principles?
  Redux is a state management library for JavaScript applications. It provides a predictable state container for managing the state of an application and makes it easier to manage data flow and state changes across an application.

- What are some best practices for writing efficient and maintainable React code?
  Use functional components instead of class components.
  Use props and state effectively.
  Use CSS modules or styled components.

