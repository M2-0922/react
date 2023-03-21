import { useEffect, useState } from "react";

const Header = (props) => {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");

    useEffect(() => {
        console.log("Hello");
    // second argument `[]` will get a value inside, 
    // if the value is not changing, useEffect will triggers only once
    // but if the value is not the same as previous, the useEffect will call the callback function again.
    }, [props.count]);
    // props.count will be 0 in initialization, but after we click the button its gonna be different than before, so React will check if the value inside of [value] changing, will call this useEffect again.


    return (
        <nav>
            <div>
                <h1>Logo</h1>
            </div>
        </nav>
    )
}

export default Header;