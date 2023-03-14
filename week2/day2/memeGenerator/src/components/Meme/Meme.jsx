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
    )

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
                    type="text" 
                    placeholder="Top Text"
                    name="topText"
                    onChange={handleChange}
                    // onChange={(event) => handleChange(event)}
                />
                <input 
                    type="text"
                    placeholder="Bottom Text"
                    name="bottomText"
                    onChange={handleChange}
                 />
                <button>Get a new meme image</button>
            </div>
            <div className={style.meme}>
                <img src={meme.randomImage} alt="random-meme-image" />
                <h2>{meme.topText}</h2>
                <h2>{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme;