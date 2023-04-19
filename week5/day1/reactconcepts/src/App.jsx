import './App.css'
import React, { useState, useEffect, useRef } from "react";
import Lab1 from './components/Lab1/Lab1';
import Lab2 from './components/Lab2/Lab2';
import TodoList from './components/TodoList/TodoList';
// import Counter from './components/Counter/Counter';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addTodo, setVisibilityFilter } from './store/actions';
import { v4 as uuidv4 } from 'uuid';

// HOCs #1

// function withLogger(WrapperComponent) {
//   return function(props) {
//     console.log(WrapperComponent.name);
//     return <WrapperComponent {...props} />
//   }
// }

// function HelloComponent(){
//   return <div>Hello World!</div>
// }

// const HelloComponentWithLogger = withLogger(HelloComponent)

// HOCs #2

// function withLoading(WrapperComponent) {
//   return function(props) {
//     if(props.loading) {
//       return <div>Loading...</div>
//     }else {
//       return <WrapperComponent {...props} />
//     }
//   }
// }

// function MyComponent(props){
//   return props.loading ? <div>Loading..</div> : <div>Hello world!</div>
// }

// const MyComponentWithLoading = withLoading(MyComponent);

// Forwarding Ref (Referance)

const InputWithRef = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} placeholder={props.hello}/>
    </div>
  )
})


function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000)
  // }, [])
  const [todo, setTodo] = useState([]);
  const [visibilityFilter, setVisibilityFilter] = useState("SHOW_ALL");

  const dispatch = useDispatch();

  const inputRef = useRef(null);
  // const inputRef2 = useRef(null);

  // const handleClick = () => {
  //   // console.log(inputRef.current);
  //   inputRef.current.focus();
  //   console.log("input1", inputRef.current.value);
  //   console.log("input2", inputRef2.current.value);
  // }

  const handleClick = () => {
    dispatch(addTodo({
      id: uuidv4(),
      text: inputRef.current.value,
      completed: false
    }))
    inputRef.current.value = "";
    dispatch(setVisibilityFilter("SHOW_ALL"))
  }

  return (
    <div className="App">
      {/* <Lab1 /> */}
      {/* <Lab2 /> */}
      {/* <InputWithRef ref={inputRef} hello="hello 1" /> */}
      {/* <input type="text" ref={inputRef} /> */}
      {/* <button onClick={handleClick}>Focus to input</button> */}
      {/* <MyComponent loading={loading} /> */}
      {/* <MyComponentWithLoading loading={loading} /> */}
      {/* <HelloComponentWithLogger log="hello"/> */}
      {/* <Counter display={(counter, incrementCounter) => (
        <div>
          <p>Count: {counter}</p>
          <button onClick={() => incrementCounter(1)}>Click and Add 1</button>
        </div>
      )} />

      <Counter display={(counter, incrementCounter) => (
        <div>
          <p>Hello: {counter}</p>
          <button onClick={() => incrementCounter(20)}>Click and Add 20</button>
        </div>
      )} />

      <Counter display={(counter, incrementCounter) => (
        <div>
          <p>Hello: {counter}</p>
          <button onClick={() => incrementCounter(100)}>Click and Add 100</button>
        </div>
      )} /> */}


      {/* <input type="text" ref={inputRef2} />
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Click</button> */}

      <input ref={inputRef} placeholder='Please enter todo'/>
      <button onClick={handleClick}>Add Todo</button>
      <TodoList />
    </div>
  )
}

export default App
