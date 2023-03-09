import "./Footer.css";
import image1 from "../../image/image 13.png";
import image2 from "../../image/image 14.png";
import image3 from "../../image/image 15.png";

function Footer() {
    return (
        <footer className="footer">
            <div>
                <img src={image1} alt="1"/>
                <img src={image2} alt="1"/>
                <img src={image3} alt="1"/>
            </div>
        </footer>
    )
}

export default Footer;