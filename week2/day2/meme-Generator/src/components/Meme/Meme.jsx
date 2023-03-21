import React, { useEffect, useState } from 'react';
import style from './Meme.module.css';
import defaultImage from '../../assets/images/memeimg.png'

const Meme = (props) => {

    const style = {
        background: props.darkMode ? "" : ""
    }

    const buttoStyle = {
        padding: "5px 12px",
        border: "none",
        borderRadius: "2px",
        marginLeft: "auto",
        background: props.darkMode ? "" : "",
        color: props.darkMode ? "black" : "white"

    }

    // const [topText, setTopText] = useState("");
    // const [bottomText, setBottomText] = useState("");
    // const [randomImage, setRandomImage] = useState("");
    const [meme, setMeme] = useState(
        {
            topText: "",
            bottomText: "",
            randomImage: defaultImage
        }
    );

    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => {
            console.log(data.data);
            setAllMemes(data.data.memes);
        })
    },[]);

    const getMemeImage = () => {
        const memeArr = allMemes;

        const randomNumber = Math.floor(Math.random() * memeArr.length);
        console.log(randomNumber);

        const imageUrl = memeArr[randomNumber].url;
        setMeme(prevMeme => {
            return {
                ...prevMeme, randomImage: imageUrl
            }
        })
    }

    const handleChange = (event) => {
        // console.log(event);
        console.log(event.target.name);
        console.log(event.target.value);
        const { name, value } = event.target;
        
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

  return (
    <main>
        <div className={style.form}>
            <input
                type="text"
                placeholder='Top Text'
                name="topText"
                onChange={handleChange} // === onChange={(event) => handleChange(event)}
                />
            <input
                type="text"
                placeholder='Bottom Text'
                name="bottomText"
                onChange={handleChange} // === onChange={(event) => handleChange(event)}
            />
            <button onClick={getMemeImage}>Get a new meme image😄</button>
        </div>
        <div className={style.meme}>
            <img className={style.randomImage} src={meme.randomImage} alt="random-meme-image"></img>
            <h2 className={`${style.topText} ${style.content}`}> {meme.topText}</h2>
            <h2 className={`${style.bottomText} ${style.content}`}>{meme.bottomText}</h2>
        </div>
    </main>
  )
}

export default Meme;