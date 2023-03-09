import "./Card.css"
import starIcon from "../../image/Star 1.png"

const Card = (props) => {
    return (
        <div className="card">
            <div className="card--header">
                <img src={props.cardImage} alt="" />
            </div>
            <div className="card--body">
                <img src={starIcon} alt="" />
                <span>{props.rating}</span>
                <span className="secondary-color">({props.like})</span>
                <span className="secondary-color card-location"><span className="black-circle">&#9679;</span> {props.location}</span>
            </div>
            <div className="card--info">
                <div className="card-title">{props.title}</div>
                <div className="card-price"><strong>From ${props.price}</strong> / night</div>
            </div>
        </div>
    )
}

export default Card;