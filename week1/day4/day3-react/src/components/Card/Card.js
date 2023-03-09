import "./Card.css";

import starIcon from "../../image/star-icon.png"

function Card (props) {
    // const Card = ({ name, lastname, age, greeting }) => {
    // console.log(props.age);
    // const { name } = props;

    console.log(props);
    return (
        <div className="card">
            <div className="card--header">
                <img src={props.image} alt="" />
            </div>
            <div className="card--body">
                <img src={starIcon} alt="" />
                <span className="card--body--rating">{props.rating}</span>
                <span className="card--body--like">({props.like})</span>
                <span className="card--body--location"><span>&#9679;</span> {props.location}</span>
            </div>
            <div className="card--info">
                <p>{props.title}</p>
                <p><strong>From ${props.price}</strong> / night</p>
            </div>
        </div>
    )
}

export default Card;