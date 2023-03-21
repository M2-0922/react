import { useEffect } from "react";

const Header = (props) => {

    useEffect(() => {
        console.log("From Header");
    }, [props.count]);

    return(
        <nav>
            <div>
                <h1>Logo</h1>
            </div>
        </nav>
    )
}
export default Header;