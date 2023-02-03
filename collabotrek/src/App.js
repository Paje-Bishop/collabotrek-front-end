import { Route, Routes, useNavigate} from 'react-router-dom';
import React from 'react';
import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import axios from "axios";
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import TripDetail from './pages/TripDetail';

function App() {
  const emptyMember = [];
  const [memberData, setMemberData] = useState(emptyMember);
  const [tripsList, setTripsList] = useState([]);
  const [flightList, setFlightList] = useState([]);
  const [hotelList, setHotelList] = useState([]);
  const [activityList, setActivityList] = useState([]);
  const [inviteeList, setInviteeList] = useState([]);
  const [trip, setTrip] = useState([1])
  const navigate = useNavigate()

  const getTripList = (memberID) => {
    axios
      .get(
        `http://127.0.0.1:8000/collabo/member/${memberID}/invitations/1/`
      )
      .then(
        (response) => {
          setTripsList(response.data)
        }
      )
    console.log(tripsList)
  }

  const submitTrip = (newTrip) => {
    axios
      .post(
        `http://127.0.0.1:8000/collabo/trips/1/`,
        newTrip
      )
      .then((response) => {
        console.log("posted successfully!")
        getTripList(memberData.id)
      }
      )
  }

  const getMemberData = (memberID) => {
    axios
      .get(
        `http://127.0.0.1:8000/collabo/members/${memberID}/`
      )
      .then((response) => {
        setMemberData(response.data)
        getTripList(memberID)
      }
      )
  }

  const getFlightList = (tripID) => {
    axios
      .get(
        `http://127.0.0.1:8000/collabo/trips/${tripID}/flights/1`
      )
      .then(
        (response) => {
          setFlightList(response.data)
        }
      )
  }

  const submitFlight = (tripID, newFlight) => {
    axios
    .post(
      `http://127.0.0.1:8000/collabo/trips/${tripID}/flights/1/`,
      newFlight
    )
    .then(() => {
      console.log("That worked!");
      getFlightList(tripID);
    })
    .catch((error) => {
      console.log("Error Status Code:", error.response.status);
      console.log("Error Message:", error.response.data);
    });
  }

  const getHotelList = (tripID) => {
    axios
      .get(
        `http://127.0.0.1:8000/collabo/trips/${tripID}/hotels/1`
      )
      .then(
        (response) => {
          setHotelList(response.data)
        }
      )
  }

  const submitHotel = (tripID, newHotel) => {
    axios
      .post(
        `http://127.0.0.1:8000/collabo/trips/${tripID}/hotels/1/`,
        newHotel
      )
      .then(() => {
        console.log("That worked!");
        getHotelList(tripID);
      })
      .catch((error) => {
        console.log("Error Status Code:", error.response.status);
        console.log("Error Message:", error.response.data);
      });
  }

  const getActivityList = (tripID) => {
    axios
      .get(
        `http://127.0.0.1:8000/collabo/trips/${tripID}/activities/1/`
      )
      .then(
        (response) => {
          setActivityList(response.data)
        }
      )
  }
  
  const submitActivity = (tripID, newActivity) => {
    axios
    .post(
      `http://127.0.0.1:8000/collabo/trips/${tripID}/activities/1/`,
      newActivity
    )
    .then(() => {
      console.log("That worked!");
      getActivityList(tripID);
    })
    .catch((error) => {
      console.log("Error Status Code:", error.response.status);
      console.log("Error Message:", error.response.data);
    });
  }
  

  const getInviteeList = (tripID) => {
    axios
      .get(
        `http://127.0.0.1:8000/collabo/trip/${tripID}/invitations/1/`
      )
      .then(
        (response) => {
          console.log(response.data)
          setInviteeList(response.data)
        }
      )
  }

  const getTripDetails = (tripID) => {
    setTrip(tripID)
    getInviteeList(tripID)
    getActivityList(tripID)
    getHotelList(tripID)
    getFlightList(tripID)
  }

  const deleteInvitation = (memberID, tripID) => {
    axios
      .delete(
        `http://127.0.0.1:8000/collabo/member/${memberID}/invitations/${tripID}/`
      )
      .then((response) => {
        getTripList(memberData.id)
        getInviteeList(tripID)
      })
  }

  const createInvitation = (newInvite) => {
    axios
      .post(
        `http://127.0.0.1:8000/collabo/member/1/invitations/1/`,
        newInvite
      )
      .then((response) => {
        getTripList(memberData.id)
        getInviteeList(newInvite.trip)
      })
  }

  const login = (email, password) => {
    const requestMember = {email: email, password: password}

    axios
    .post(
      `http://127.0.0.1:8000/collabo/login/`,
      requestMember
    )
    .then((response) => {
      setMemberData(response.data)
      getTripList(response.data["id"])
      navigate('/dashboard/')
    })
    .catch((error) => {
      console.log("Error Status Code:", error.response.status);
      console.log("Error Message:", error.response.data);
    })
  }

  const logout = () => {
    setMemberData([])
    navigate('/login/')
  }

  useEffect(() => {
    // getMemberData(2)
    getTripDetails(trip)
  }, [])

  // WAS TRYING TO USE THIS TO LOG OUT IF THERE'S NO MEMBER
  
  // useEffect(() => {
  //   if (memberData === []) {
  //     const loginAgain = () => {navigate(/login/)}
  //     loginAgain()
  //   }
  // }, [memberData])

  return (
    <div className="App">
      <NavBar 
        member={memberData}
        logout={logout}
      />
        <Routes>
          <Route path="/login/" element={<Login 
              getMember={getMemberData}
              login={login}
            />
          }>
          </Route>
          <Route path="/dashboard/" element={<Dashboard 
              trips={tripsList}
              getTrip={getTripDetails}
              member={memberData}
              submitTrip={submitTrip}
              deleteInvitation={deleteInvitation}
            />
          }>
          </Route>
          <Route path="/tripdetails/" element={<TripDetail 
              flights={flightList}
              hotels={hotelList}
              activities={activityList}
              invitees={inviteeList}
              trip={trip}
              submitFlight={submitFlight}
              submitHotel={submitHotel}
              submitActivity={submitActivity}
              deleteInvitation={deleteInvitation}
              createInvitation={createInvitation}
            />
          }>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
