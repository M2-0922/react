import "./Footer.css"
import twitter from "../../image/Twitter Icon.png"
import facebook from "../../image/Facebook Icon.png"
import ig from "../../image/Instagram Icon.png"
import linkedin from "../../image/Linkedin Icon.png"
import github from "../../image/GitHub Icon.png"

function Footer() {
  return (
    <footer className="footer">
      <img src={twitter} alt="twitter_icon" />
      <img src={facebook} alt="twitter_icon" />
      <img src={ig} alt="twitter_icon" />
      <img src={linkedin} alt="twitter_icon" />
      <img src={github} alt="twitter_icon" />
    </footer>
  )
}

export default Footer;