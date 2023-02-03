import { useState } from "react";
import { Modal, Button, ModalBody } from "reactstrap";

const NewFlightForm = (props) => {
  const [formFields, setFormFields] = useState({
    depart_date: "",
    depart_time: "",
    depart_city: "",
    arrive_date: "",
    arrive_time: "",
    arrive_city: "",
    layover_id: "",
    price: ""
  });

  const [showError, setShowError] = useState(false);

  const handleChange = (event) => {
    setFormFields({
      ...formFields,
      [event.target.id]: event.target.value,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    // if (!formFields.username || !formFields.password) {
    //   setShowError(true);
    // } else {
    setShowError(false);
    props.submitFlight(props.trip, formFields);
    // }
    setFormFields({
      title: "",
      owner: "",
    });

    // add code to push to backend
    // reload board forms
  };

  const [modal, setModal] = useState(false);

  // Toggle for Modal
  const toggle = () => setModal(!modal);

  return (
    <div id="flightmodal">
      <Button color="primary" onClick={toggle}>
        +
      </Button>
      <Modal isOpen={modal} toggle={toggle} modalTransition={{ timeout: 2000 }}>
        <ModalBody>
          <div className="NewFlightForm">
            <h3 className="NewFlightTitle"> Add a New Flight </h3>
            <form onSubmit={onFormSubmit}>
              <div className="bottomSpacing">
                <label htmlFor="depart_city">Departure City: </label>
                <input
                  name="depart_city"
                  id="depart_city"
                  value={formFields.depart_city}
                  onChange={handleChange}
                />
              </div>
              <br />
              <div className="bottomSpacing">
                <label htmlFor="depart_date">Departure Date: </label>
                <input
                  name="depart_date"
                  id="depart_date"
                  type="date"
                  value={formFields.depart_date}
                  onChange={handleChange}
                />
              </div>
              <br />
              <div className="bottomSpacing">
                <label htmlFor="depart_time">Departure Time: </label>
                <input
                  name="depart_time"
                  id="depart_time"
                  type="time"
                  value={formFields.depart_time}
                  onChange={handleChange}
                />
              </div>
              <br />
              <div className="bottomSpacing">
                <label htmlFor="arrive_city">Arrival City: </label>
                <input
                  name="arrive_city"
                  id="arrive_city"
                  value={formFields.arrive_city}
                  onChange={handleChange}
                />
              </div>
              <br />
              <div className="bottomSpacing">
                <label htmlFor="arrive_date">Arrival Date: </label>
                <input
                  name="arrive_date"
                  id="arrive_date"
                  type="date"
                  value={formFields.arrive_date}
                  onChange={handleChange}
                />
              </div>
              <br />
              <div className="bottomSpacing">
                <label htmlFor="arrive_time">Arrival Time: </label>
                <input
                  name="arrive_time"
                  id="arrive_time"
                  type="time"
                  value={formFields.arrive_time}
                  onChange={handleChange}
                />
              </div>
              <br />
              <div className="bottomSpacing">
                <label htmlFor="price">Price: </label>
                <input
                  name="price"
                  id="price"
                  value={formFields.price}
                  onChange={handleChange}
                />
              </div>
              <br />
              {showError ? (
                <p>Error: Owner and Title need to be filled out</p>
              ) : null}

              <input type="submit" value="Submit" className="pinkButton" />
            </form>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};
export default NewFlightForm;
