import "./Header.css"
import logo from "../../image/airbnb-logo.png"

function Header () {
    return (
        <header className="header">
           <img className="header--logo" src={logo} alt="airbnb-logo" />
        </header>
    )
}

export default Header;