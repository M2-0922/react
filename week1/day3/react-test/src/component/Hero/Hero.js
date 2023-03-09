import "./Hero.css";
import heroImage from "../../image/airbnb-hero.png";


function Hero() {
    return (
        <div className="hero">
            <img className="hero-image" src={heroImage} alt="airbnb-hero"></img>
            <h1 className="hero--title">Online Experiences</h1>
            <p class="hero--content">
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    )
}

export default Hero;