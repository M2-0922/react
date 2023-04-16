// Lab question 1: Create a component that forwards a ref to a child component and logs the child component's props when it is clicked.

import { useRef } from "react";

const ChildComponent = React.forwardRef((props, ref) => {
    function handleClick () {
        console.log(props);
    }

    return <input ref={ref} onClick={handleClick} />
})

function Parent(){
    const inputRef = useRef(null);

    return <ChildComponent ref={inputRef} />
}

export default Lab1