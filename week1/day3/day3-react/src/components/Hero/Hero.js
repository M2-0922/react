import heroImage from "../../image/airbnb-hero.png"
import "./Hero.css"

function Hero () {
    return (
        <div className="hero">
            <img className="hero--image" src={heroImage} alt="" />
            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--content">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}

export default Hero;