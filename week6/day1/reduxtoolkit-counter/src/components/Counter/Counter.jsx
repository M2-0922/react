import React from "react";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from "./counterSlice";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <br />
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <br />
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
      <br />
      <button onClick={() => dispatch(decrementByAmount(10))}>
        Decrement by 10
      </button>
    </div>
  );
};

export default Counter;
