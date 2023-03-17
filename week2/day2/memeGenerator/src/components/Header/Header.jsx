import React from "react"
import style from "./Header.module.css";
import trollFace from "../../assets/images/troll-face.png"

const Header = () => {
    return (
        <header className={style.header}>
            <img className={style.image} src={trollFace} alt="troll-face-logo" />
            <h2 className={style.title}>Meme Generator</h2>
        </header>
    );
}

export default Header;