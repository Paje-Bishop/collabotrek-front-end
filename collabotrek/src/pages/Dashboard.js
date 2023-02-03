import TripSummary from "../components/TripSummary";
import React from 'react';
import "../components/TripSummary.css"
import NewTripForm from "../components/NewTripForm";

const Dashboard = (props) => {

  const getTripsJSX = (props) => {
    let tripsJSX = props.trips.map((trip) => {
      return(
      <div className="col-4">
        <TripSummary
          title={trip.title}
          id={trip.id}
          key={trip.id}
          getTrip={props.getTrip}
          member={props.member}
          deleteInvitation={props.deleteInvitation}
        />
      </div>
      );
    });
    // const newIndex = (tripsJSX.length)
    // const newTrip = (
    //   <NewTripForm />
    // )
    // tripsJSX.splice(newIndex, 0, newTrip)
    return(tripsJSX)
  };

  return(
    <div className="container">
      <ul>
        <div className="row">
          {getTripsJSX(props)}
          <NewTripForm 
            member={props.member}
            submitTrip={props.submitTrip}
          />
        </div>
      </ul>
    </div>
  )
};

export default Dashboard;