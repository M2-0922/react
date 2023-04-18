import React from 'react'
import { useSelector } from 'react-redux';

const Count = () => {
    const count = useSelector(state => state.count.count);

    return (
        <div>Count is {count}</div>
    )
}

export default Count