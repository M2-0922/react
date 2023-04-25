
- What is React? Can you explain its main features and advantages over other JavaScript frameworks?
```js
// explain here

// React is Javascript framework which is developed Meta Platform inc. The main feature of React is its component-based construction. Users can make a code in one component independently, it means easy to manage the codes separately in such big team, good to keep codes clean and more organized.

```
- What is the Virtual DOM in React? How does it help in optimizing the performance of the application?
```js
// explain here

// React Virtual DOM is a concept which is used to optimaze the performance of rendering. In React, all changes to the UI are first made to the Virtual DOM, which means that only the differences will be updated in the actual DOM and it makes results in faster and more efficient.

```
- What is the difference between state and props in React?
```js
// explain here

// props:immutable, passed it from parent. Can't be changed | state:mutable and maintained by component. Can be changed

```
- What are React Hooks? How do they simplify the process of writing functional components?
```js
// explain here

// React Hooks are usefull functions to manage react features such as useState, useEffect, useContext.

/*
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
      ...
*/

```
- What are the lifecycle methods of a React component? Explain each one.
```js
// explain here

// In React, each component has a lifecycle which you can monitor and manipulate during the process of program. It contains 3 main phases : Mounting /(When put elements into DOM), Updating (Updated when there some changes), and Unmounting (When elements removed from the DOM).


```
- How does React handle errors and exceptions in the application?
```js
// explain here

// static getDerivedStateFromError(error)
// componentDidCatch(error, errorInfo):

```
- What is JSX in React? How does it differ from HTML and what are the benefits of using it?
```js
// explain here
// JSX is a HTML-like syntax directly in JavaScript code (in this case, it's React). As I wrote before this look-like similar to html and user can use it inside of js file, simply it is the advantage of JSX

```
- What is the difference between controlled and uncontrolled components in React? When would you use each one?
```js
// explain here

```
- What is Redux? How does it integrate with React? What are its core principles?
```js
// explain here

```
- What are some best practices for writing efficient and maintainable React code?
```js
// explain here

```