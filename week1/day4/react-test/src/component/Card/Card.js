import "./Card.css";
import starIcon from "../../image/star.png";

// *** How to pass props from parents to child ?? ***

// -way1-
// const Card = (props) => {
//     console.log(props.name);

// -way2-
// const Card = (props) => {
//     const { name, age } = props;
//     console.log(name);

// -way3-
// const Card = ({ name, age }) => {
//     console.log(name);
//     console.log(age);

// ************************

const Card = ({ title, rating, like, location, price, image, available }) => {
    return (
        <div className="card">
            <div className="card--header">
                <div className="card--header--available">
                    <p>{available}</p>
                </div>
                <img src={image} alt="cardImage" />
            </div>
            <div className="card--body">
                <img src={starIcon} alt="starIcon" />
                <span className="card--body--rating">{rating}</span>
                <span className="card--body--like">({like})</span>
                <span className="card--body--location">&#8226;{location}</span>
            </div>
            <div className="card--info">
                <p>{title}</p>
                <p><strong>From ${price}</strong> / night</p>
            </div>
        </div>
    )
}

export default Card;