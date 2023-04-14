// `Lab question 3`: 
// Create a pure component that renders a list of items. 
// The component should only rerender when the list of items changes.

import React, {useState} from "react";

class MyComponent extends React.PureComponent {
    render() {
        return <ul>
                {this.props.list.map(
                    (item, index) => <li key={index}>{item}</li>
                )}
                </ul>
    }
}

const Lab3 = () => {
    const [list, setList] = useState([]);
    const [item, setItem] = useState("");

    function handleClick() {
        setList(prevValue => [...prevValue, item]);
        setItem("");
    }

    function handleChange(e){
        setItem(e.target.value);
    }

    return (
        <div>
            <MyComponent list={list} />
            <input type='text' value={item} onChange={handleChange}></input>
            <div><button onClick={handleClick}>Add list item</button></div>
        </div>
    )
};

export default Lab3;