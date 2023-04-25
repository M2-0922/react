
- What is React? Can you explain its main features and advantages over other JavaScript frameworks?
```js
// explain here
React is an open source Javascript library designed to create user interfaces easily. It can be used to create dynamic single page websites, control panels or large web platforms.
 React is based on component-oriented programming, creating reusable components that manage their own state and being able to create more complex user interfaces.

Advantages over JavaScript is:
-DOM virtual
-isomorphism
-components

https://www.qindel.com/conoces-react-y-sus-beneficios-si-no-es-asi-te-lo-explicamos/
```
- What is the Virtual DOM in React? How does it help in optimizing the performance of the application?
```js
In React every UI piece is a component, and each component has a state. React follows the observable pattern and listens for state changes. When the state of a component changes, React updates the virtual DOM tree. Once the virtual DOM has been updated, React then compares the current version of the virtual DOM with the previous version of the virtual DOM. This process is called “diffing”.

Once React knows which virtual DOM objects have changed, then React updates only those objects, in the real DOM. This makes the performance far better when compared to manipulating the real DOM directly. This makes React standout as a high performance JavaScript library

```
- What is the difference between state and props in React?
```js
PROPS is passed to the component (similar to function parameters) while STATE is managed within the component (similar to variables declared within a function).

STATE is a set of variables that determine the current condition of the component.
PROPS is short for properties. It is the set of attributes that are passed from a parent component to a child component

https://www.educative.io/answers/what-is-the-difference-between-props-and-state-in-reactjs?utm_campaign=brand_educative&utm_source=google&utm_medium=ppc&utm_content=performance_max&eid=5082902844932096&utm_term=&utm_campaign=%5BNew%5D+Performance+Max&utm_source=adwords&utm_medium=ppc&hsa_acc=5451446008&hsa_cam=18511913007&hsa_grp=&hsa_ad=&hsa_src=x&hsa_tgt=&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjw9J2iBhBPEiwAErwpeUKXGUlfhSNwX9GsbNu8xT-DvPtBFi2GNhyWt3evmCfG56Brp2DNMhoCw9UQAvD_BwE

```
- What are React Hooks? How do they simplify the process of writing functional components?
```js
Hooks are a new API from the React library that allows us to have state, and other React features, in components created with a function. This, before, was not possible and it forced us to create a component with class to be able to access all the possibilities of the library. And that's where the name comes from. Hooks is hook, and precisely what they do is that they allow you to hook your functional components to all the features that React offers.

https://midu.dev/react-hooks-introduccion-saca-todo-el-potencial-sin-class/
```
- What are the lifecycle methods of a React component? Explain each one.
```js
Lifecycle methods are used to operate on components throughout their duration in the DOM.Can only be used in class components.
-Mounting
A component is being created and inserted into the DOM:

constructor()
static getDerivedStateFromProps()
render()
componentDidMount()

-Updating
An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:

static getDerivedStateFromProps()
shouldComponentUpdate()
render()
getSnapshotBeforeUpdate()
componentDidUpdate()

-Unmounting
This method is called when a component is being removed from the DOM:

componentWillUnmount()

-Error Handling
These methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.

static getDerivedStateFromError()
componentDidCatch()


```
- How does React handle errors and exceptions in the application?
```js
Catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI

```
- What is JSX in React? How does it differ from HTML and what are the benefits of using it?
```js
JSX It is a JavaScript extension that allows us to describe React’s object tree using a syntax that resembles that of an HTML template. It is just an XML-like extension that allows us to write JavaScript that looks like markup and have it returned from a component.


```
- What is the difference between controlled and uncontrolled components in React? When would you use each one?
```js
In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.

```
- What is Redux? How does it integrate with React? What are its core principles?
```js
It is a library for managing states that follow the principles of the flux architecture & is an independent framework.

Single source of truth:
The global state of your application is stored in an object tree within a single store.

State is read-only:
The only way to change the state is to emit an action, an object describing what happened.

Changes are made with pure functions:
To specify how the state tree is transformed by actions, you write pure reducers.


```
- What are some best practices for writing efficient and maintainable React code?
```js
-Use meaninful component names: Give component names that reflect their functionality
-Break down components: Breaking down complex components into smaller and more manageable ones makes it easier to understand and maintain the code.
-Use destructuring: Destructuring props and state makes code more concise and readable
-Keep components small: Components small and focused on a single responsibility makes it easier to test and debug code.
-Use prop-types:  helps prevent errors
-Use funcional compoenents: Using functional components instead of class components whenever possible is wise because functional components are easier to read and write.
-Avoid using inline styleses: Using CSS classes instead of inline styles separates the presentation from the logic and makes it easier to maintain and update the design.
-Use arrow functions: make code more concise and easier to read
-Use stateless components:  Stateless components are easier to reuse and compose since they only have to render based on the data passed to them through props. 
-Use spread operator: it allows you to write shorter and more concise code

https://www.turing.com/kb/writing-clean-react-code

```