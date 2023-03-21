import React, { useState, useEffect } from "react"
import style from "./Meme.module.css";
import defaultImage from "../../assets/images/default-image.png"
const Meme = () => {
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
            setAllMemes(data.data.memes);
        })
    }, []);

    const getMemeImage = () => {
        const memeArr = allMemes;
        const randomNumber = Math.floor(Math.random() * memeArr.length);
        const imageUrl = memeArr[randomNumber].url;

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: imageUrl
            }
        })
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })

    }

    return(
        <main>
            <div className={style.form}>
                <input 
                    className={`${style.customInput}`}
                    type="text" 
                    placeholder="Top Text"
                    name="topText"
                    onChange={handleChange}
                    // onChange={(event) => handleChange(event)}
                />
                <input 
                    className={`${style.customInput}`}
                    type="text"
                    placeholder="Bottom Text"
                    name="bottomText"
                    onChange={handleChange}
                 />
                <button className={`${style.customButton}`} onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <div className={style.meme}>
                <img className={style.memeImage} src={meme.randomImage} alt="random-meme-image" />
                <h2 className={`${style.topText} ${style.content}`}>{meme.topText}</h2>
                <h2 className={`${style.bottomText} ${style.content}`}>{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme;