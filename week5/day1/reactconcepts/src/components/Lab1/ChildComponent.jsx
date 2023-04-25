import React from 'react'

const ChildComponent = ({items, render}) => {
    const name = "kubilay";
    console.log(items);
    return (
        <>
            {items.map((item, index) => {
                return <li key={index}>{render(item, name)}</li>
            })}
        </>
    )
}

export default ChildComponent