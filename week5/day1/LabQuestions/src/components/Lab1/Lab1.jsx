// `Lab question 1`: 
// Create a component that forwards a ref to a child component and logs the child component's props when it is clicked.

import React, {forwardRef, useRef} from "react";

const LogWithRef = forwardRef((props, ref) => {

    const handleClick = () => {
        console.log(props);
    }

    return (
        <div>
            {Object.values(props).map(
                (value, index) => <p ref={ref} key={index}>{value}</p>
            )}
            <button onClick={handleClick}>Log props</button>
        </div>
    );
});

const Lab1 = () => {
    const ref = useRef(null);

    return (
        <div>
            <LogWithRef ref={ref} text1="Hello" text2="World"/>
        </div>
    );
};

export default Lab1;