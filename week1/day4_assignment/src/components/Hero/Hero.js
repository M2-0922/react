import "./Hero.css";
import emailIcon from "../../image/email icon.png"

function Hero(props) {
  console.log(props);
  return (
    <div className="main">
      <div className="profile">
        <h1 className="profile--name">{props.name}</h1>
        <p className="profile--position">{props.position}</p>
        <p className="profile--url">{props.url}</p>
      </div>

      <button className="btn btn-light"><img src={emailIcon}/>Email</button>

      <div className="detail">
        <div className="detail--about">
          <h2 className="title">About</h2>
          <p className="content">{props.about}</p>
        </div>
        <div className="detail--interests">
          <h2 className="title">Interests</h2>
          <p className="content">{props.interests}</p>
        </div>
      </div>
    </div>
    
  )
}

export default Hero;