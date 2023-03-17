import React from "react"
import style from "./Header.module.css";
import trollFace from "../../assets/images/troll-face.png"

const Header = (props) => {

    const styles = {
        background: props.darkMode ? "linear-gradient(90.01deg, #618DFF 0.09%, rgba(127, 182, 248, 0.91) 99.98%)" : "linear-gradient(90deg, #B3A86E 1.18%, #FAD200 100%)",
    }

    const buttonStyle = {
        padding: "5px 12px",
        border: "none",
        borderRadius: "2px",
        marginLeft: "auto",
        background: props.darkMode ? "white" : "black",
        color: props.darkMode ? "black" : "white"
    }

    return (
        <header className={style.header} style={styles}>
            <img className={style.image} src={trollFace} alt="troll-face-logo" />
            <h2 className={style.title}>Meme Generator</h2>

            <button style={buttonStyle} onClick={props.toggleDarkMode}>{props.darkMode ? "Light" : "Dark"}</button>
        </header>
    );
}

export default Header;