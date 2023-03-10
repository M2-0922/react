import "./Header.css"
import pic from "../../image/person_photo.png"

function Header(props){
  console.log(props);
  return (
    <header className="header">
      <img className="header--top" src={pic} alt="person_photo" />
    </header>
  )
}

export default Header;