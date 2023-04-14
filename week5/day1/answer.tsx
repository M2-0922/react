// Q1
// import React, { forwardRef, useImperativeHandle, useRef } from "react";

//
// const ChildComponent = forwardRef((props, ref) => {
//   const handleClick = () => {
//     console.log("Child component props:", props);
//   };

//   useImperativeHandle(ref, () => ({
//     handleClick,
//   }));

//   return <button onClick={handleClick}>{props.children}</button>;
// });

//
// const ParentComponent = () => {
//   const childRef = useRef(null);

//   const handleParentClick = () => {
//     childRef.current.handleClick();
//   };

//   return (
//     <div>
//       <h2>Parent Component</h2>
//       <button onClick={handleParentClick}>Log child props from parent</button>
//       <ChildComponent ref={childRef} color="blue">
//         Click me
//       </ChildComponent>
//     </div>
//   );
// };

// export default ParentComponent;

// Q2
// import React from 'react';

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false, errorMessage: '' };
//   }

//   componentDidCatch(error, errorInfo) {
//     this.setState({ hasError: true, errorMessage: error.message });
//   }

//   render() {
//     if (this.state.hasError) {
//       return (
//         <div>
//           <h1>Oops! Something went wrong.</h1>
//           <p>Error: {this.state.errorMessage}</p>
//         </div>
//       );
//     }

//     return this.props.children;
//   }
// }

// export default ErrorBoundary;

// Q3
// import React from 'react';

// const ListItem = React.memo(({ item }) => {
//   console.log('Rendering ListItem:', item);
//   return <li>{item}</li>;
// });

// const ItemList = React.memo(({ items }) => {
//   console.log('Rendering ItemList');
//   return (
//     <ul>
//       {items.map((item) => (
//         <ListItem key={item} item={item} />
//       ))}
//     </ul>
//   );
// });

// export default ItemList;

// import React from 'react';
// import ItemList from './ItemList';

// function App() {
//   const items = ['Item 1', 'Item 2', 'Item 3'];

//   return (
//     <div>
//       <h1>Item List</h1>
//       <ItemList items={items} />
//     </div>
//   );
// }

// export default App;

// Q4
// import React, { useState, useContext } from 'react';

// const FormContext = React.createContext();

// const Form = ({ onSubmit, children }) => {
//   const [values, setValues] = useState({});

//   const handleChange = (name, value) => {
//     setValues((prevValues) => ({ ...prevValues, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(values);
//   };

//   return (
//     <FormContext.Provider value={{ values, handleChange }}>
//       <form onSubmit={handleSubmit}>{children}</form>
//     </FormContext.Provider>
//   );
// };

// const Input = ({ name, ...props }) => {
//   const { values, handleChange } = useContext(FormContext);
//   return (
//     <input
//       name={name}
//       value={values[name] || ''}
//       onChange={(e) => handleChange(name, e.target.value)}
//       {...props}
//     />
//   );
// };

// const SubmitButton = ({ children, ...props }) => {
//   return <button type="submit" {...props}>{children}</button>;
// };

// Form.Input = Input;
// Form.SubmitButton = SubmitButton;

// export default Form;

// import React from 'react';
// import Form from './Form';

// const ParentComponent = () => {
//   const handleSubmit = (values) => {
//     console.log('Form submitted with values:', values);
//   };

//   return (
//     <div>
//       <h1>Compound Form Component</h1>
//       <Form onSubmit={handleSubmit}>
//         <Form.Input name="firstName" placeholder="First Name" />
//         <Form.Input name="lastName" placeholder="Last Name" />
//         <Form.Input name="email" placeholder="Email" />
//         <Form.SubmitButton>Submit</Form.SubmitButton>
//       </Form>
//     </div>
//   );
// };

// export default ParentComponent;
