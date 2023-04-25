import React, { useState } from 'react'

//  Create an HOC that adds a count prop to a component. The wrapped component should render the count value and a button that increments the count when clicked.

function withCount(WrappedComponent) {
    return function(props) {
        const [count, setCount] = useState(0);

        function handleClick() {
            setCount(count + 1);
        }

        return <WrappedComponent count={count} handleClick={handleClick} {...props} />
    }
}

function withLoading(WrappedComponent) {
    return function(props) {
        if(props.loading) {
            return <h1>Loading...</h1>
        }else{
            return <WrappedComponent {...props} />
        }
    }
}


function MyComponent({count, handleClick}) {
    return (
        <div>
            <h4>Count: {count} </h4>
            <button onClick={handleClick}>
                Increment Count
            </button>
        </div>
    )
}

function MyComponent2({loading}){

    return <div>Hello World</div>
}

const MyComponentWithCount = withCount(MyComponent);
const MyComponentWithLoading = withLoading(MyComponent2);


const Lab2 = () => {
  return (
    <div>
        <MyComponentWithCount />
        <MyComponentWithLoading loading={false} />
    </div>
  )
}

export default Lab2