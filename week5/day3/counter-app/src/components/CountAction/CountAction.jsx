import React from 'react'
import { useDispatch } from "react-redux";
import { increaseCount, decreaseCount } from "../../actions/counterAction"

const CountAction = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(increaseCount(5))}>Increase 5</button>
      <button onClick={() => dispatch(decreaseCount(1))} >Decrease 1</button>
    </>
  )
}

export default CountAction