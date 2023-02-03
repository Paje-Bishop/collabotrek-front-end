import { useState } from "react";
import { Modal, ModalBody, Button } from "reactstrap";

const NewInviteForm = (props) => {
  const [formFields, setFormFields] = useState({
    memberID: "",
    departure_city: "",
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
    const newInvite = {
      member: formFields.memberID,
      departure_city: formFields.departure_city,
      trip: props.trip,
    };
    setShowError(false);
    props.createInvitation(newInvite);
    // }
    setFormFields({
      member: "",
    });

    // add code to push to backend
    // reload board forms
  };

  const [modal, setModal] = useState(false);

  // Toggle for Modal
  const toggle = () => setModal(!modal);

  return (
    <div className="col-4" id="NewInviteForm">
      <Button color="primary" onClick={toggle}>
        +
      </Button>
      <Modal isOpen={modal} toggle={toggle} modalTransition={{ timeout: 2000 }}>
        <ModalBody>
          <div className="NewInviteForm">
            <h3 className="NewInviteTitle"> Invite a friend! </h3>
            <form onSubmit={onFormSubmit}>
              <div className="bottomSpacing">
                <label htmlFor="memberID">ID to Invite: </label>
                <input
                  name="memberID"
                  id="memberID"
                  value={formFields.memberID}
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

export default NewInviteForm;
