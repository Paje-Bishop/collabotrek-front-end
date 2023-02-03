import { useState } from "react";
import { Modal, ModalBody } from "reactstrap";
import TripSummary from "./TripSummary";
import "./NewTripForm.css"

const NewTripForm = (props) => {
  const [formFields, setFormFields] = useState({
    title: "",
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
      const newTrip = {
        title: formFields.title,
        host: props.member.id
      }
      setShowError(false);
      props.submitTrip(newTrip);
    // }
    setFormFields({
      title: ""
    });

    // add code to push to backend
    // reload board forms
  };

  const [modal, setModal] = useState(false);
  
  // Toggle for Modal
  const toggle = () => setModal(!modal);

  return (
    <div className="col-4" id="NewTripForm">
      <div>
        <TripSummary
          title="+"
          key={0}
          id={0}
          toggle={toggle}
          getTrip={props.getTrip}
        />
      </div>
      {/* <Button color="primary"
            onClick={toggle}>+</Button> */}
      <Modal isOpen={modal}
            toggle={toggle}
            modalTransition={{ timeout: 2000 }}>
        <ModalBody>
        <div className="NewHotelForm">
          <h3 className="NewHotelTitle"> Add a New Trip </h3>
          <form onSubmit={onFormSubmit}>
            <div className="form-group bottomSpacing">
              <label htmlFor="title">Title: </label>
              <input
                name="title"
                id="title"
                value={formFields.title}
                onChange={handleChange}
              />
            </div>
            {showError ? <p>Error: Owner and Title need to be filled out</p> : null}
            <br />
            <button type="submit" value="Submit" className="btn btn-danger">Submit</button>
          </form>
        </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default NewTripForm;