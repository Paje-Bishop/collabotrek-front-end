import React from "react";
import Flight from "../components/Flight";
import Hotel from "../components/Hotel";
import Activity from "../components/Activity";
import InvitedMember from "../components/InviteList";
import NewFlightForm from "../components/NewFlightForm";
import "./TripDetail.css"
import NewHotelForm from "../components/NewHotelForm";
import NewActivityForm from "../components/NewActivityForm";
import NewInviteForm from "../components/NewInviteForm";

const TripDetail = (props) => {
  const getFlightsJSX = (props) => {
    let flightsJSX = props.flights.map((flight) => {
      return (
        <Flight
          key={flight.id}
          depart_city={flight.depart_city}
          depart_date={flight.depart_date}
          depart_time={flight.depart_time}
          arrive_city={flight.arrive_city}
          arrive_date={flight.arrive_date}
          arrive_time={flight.arrive_time}
          price={flight.price}
          layovers={flight.layovers}
          comments={flight.comments}
          votes={flight.votes}
        />
      );
    });
    return flightsJSX;
  };

  const getHotelsJSX = (props) => {
    let hotelsJSX = props.hotels.map((hotel) => {
      return (
        <Hotel
          key={hotel.id}
          name={hotel.name}
          address={hotel.address}
          comments={hotel.comments}
          price={hotel.price}
          votes={hotel.votes}
        />
      );
    });
    return hotelsJSX;
  };

  const getActivitiesJSX = (props) => {
    let activitiesJSX = props.activities.map((activity) => {
      return (
        <Activity
          key={activity.id}
          name={activity.name}
          address={activity.address}
          comments={activity.comments}
          price={activity.price}
          votes={activity.votes}
        />
      );
    });
    return activitiesJSX;
  };

  const getInviteesJSX = (props) => {
    let inviteesJSX = props.invitees.map((invitee) => {
      return (
        <InvitedMember
          first_name={invitee.first_name}
          memberID={invitee.id}
          key={props.id}
          tripID={props.trip}
          deleteInvitation={props.deleteInvitation}
        />
      );
    });
    return inviteesJSX;
  };

  return (
    <div className="container">
      <div className="row detailBody">
        <div className="col-3">
          <div className="invitees">
            <h4>
              Invited Members
            </h4>
            <NewInviteForm 
              createInvitation={props.createInvitation}
              trip={props.trip}
            />
            <ul>
              {getInviteesJSX(props)}
            </ul>
          </div>
        </div>
        <div className="col-9 overflow-auto">
          <div className="tripSection">
            <h4>Flights</h4> 
            <NewFlightForm 
              trip={props.trip}
              submitFlight={props.submitFlight}
            />
            <ul className="flights overflow-auto triplist">{getFlightsJSX(props)}</ul>
          </div>
          <div className="tripSection">
            <h4>Hotels</h4>
            <NewHotelForm 
              trip={props.trip}
              submitHotel={props.submitHotel}
            />
            <ul className="hotels overflow-auto triplist">{getHotelsJSX(props)}</ul>
          </div>
          <div className="tripSection">
            <h4>Activities</h4>
            <NewActivityForm 
              trip={props.trip}
              submitActivity={props.submitActivity}
            />
            <ul className="activities overflow-auto triplist">{getActivitiesJSX(props)}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripDetail;
