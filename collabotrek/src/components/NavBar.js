import "./NavBar.css"
import { useNavigate } from "react-router-dom";

const NavBar = (props) => {
  const navigate = useNavigate()

  return(
    <div className="navbar navbar-default">
      <h1 onClick={() => {navigate('/dashboard/')}}>CollaboTrek &#9992;</h1>
      <span>
      <h2>ID#{props.member.id}</h2>
      <button onClick={() => {props.logout()}}>logout</button>
      </span>
    </div>
  )
}

export default NavBar;