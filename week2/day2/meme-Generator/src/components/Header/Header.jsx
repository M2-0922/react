import React from 'react';
import style from './Header.module.css';
import image from '../../assets/images/pepe.png';


const Header = (props) => {

  console.log(props);

  const styles= {
    background: props.darkMode ? "black" : "white"
  }

  return (
    <header className={style.header}>
        <div className={style.imageContainer}>
            <img className={style.image} src={image} alt="meme-icon"></img>
        </div>
        <h2 className={style.title}>Meme Generator</h2>
    </header>
  )
}

export default Header

