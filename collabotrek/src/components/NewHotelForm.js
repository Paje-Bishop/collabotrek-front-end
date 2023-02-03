import { useState } from "react";
import { Modal, Button, ModalBody } from "reactstrap";


const NewHotelForm = (props) => {
  const [formFields, setFormFields] = useState({
    name: "",
    address: "",
    price: "",
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
      props.submitHotel(props.trip, formFields);
    // }
    setFormFields({
      name: "",
      address: "",
      price: "",
    });

    // add code to push to backend
    // reload board forms
  };

  const [modal, setModal] = useState(false);
  
  // Toggle for Modal
  const toggle = () => setModal(!modal);

  return (
    <div id="flightmodal">
      <Button color="primary"
            onClick={toggle}>+</Button>
      <Modal isOpen={modal}
            toggle={toggle}
            modalTransition={{ timeout: 2000 }}>
        <ModalBody>
        <div className="NewHotelForm">
          <h3 className="NewHotelTitle"> Add a New Hotel </h3>
          <form onSubmit={onFormSubmit}>
            <div className="bottomSpacing">
              <label htmlFor="name">Name: </label>
              <input
                name="name"
                id="name"
                value={formFields.name}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="bottomSpacing">
              <label htmlFor="address">Address: </label>
              <input
                name="address"
                id="address"
                value={formFields.address}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="bottomSpacing">
              <label htmlFor="password">Price per night: </label>
              <input
                name="price"
                id="price"
                value={formFields.price}
                onChange={handleChange}
              />
            </div>
            <br />
            {showError ? <p>Error: Owner and Title need to be filled out</p> : null}

            <input type="submit" value="Submit" className="pinkButton" />
          </form>
        </div>
        </ModalBody>
      </Modal>
    </div>
  );
};
export default NewHotelForm;