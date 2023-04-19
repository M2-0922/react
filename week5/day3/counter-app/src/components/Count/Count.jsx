import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Count = () => {
  const count = useSelector(state => state.count);

  return (
    <div>Count is {count}</div>
  )
}

export default Count