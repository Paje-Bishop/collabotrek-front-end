import "./TripSummary.css";
import { useNavigate } from "react-router-dom";

const TripSummary = (props) => {
  const navigate = useNavigate()
  const selectTrip = (tripID) => {
    props.getTrip(tripID)
    navigate('/tripdetails/')
  }
  return(
    <div className="tripSummary">
      <li className={props.id===0 ? "newTripItem":"tripListItem"}
        onClick={() => {props.id===0 ? props.toggle():selectTrip(props.id)}}>
        {props.title}
      </li>
      <button onClick={
        () => {props.deleteInvitation(props.member.id, props.id)}
      }>x</button>
    </div>
  )
}

export default TripSummary;