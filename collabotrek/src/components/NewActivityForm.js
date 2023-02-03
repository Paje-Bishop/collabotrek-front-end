import { useState } from "react";
import { Modal, Button, ModalBody } from "reactstrap";

const NewActivityForm = (props) => {
  const [formFields, setFormFields] = useState({
    name: "",
    address: "",
    price: "",
    date: "yyyy-mm-dd",
  });

  const [showError, setShowError] = useState(false);

  const handleChange = (event) => {
    setFormFields({
      ...formFields,
      [event.target.id]: event.target.value,
    });
    // if (event.target.id === 'date') {
    //   const year = event.target.value
    // };
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    // if (!formFields.username || !formFields.password) {
    //   setShowError(true);
    // } else {
    console.log(formFields.date);
    setShowError(false);
    props.submitActivity(props.trip, formFields);
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
    <div id="activitymodal">
      <Button color="primary" onClick={toggle}>
        +
      </Button>
      <Modal isOpen={modal} toggle={toggle} modalTransition={{ timeout: 2000 }}>
        <ModalBody>
          <div className="NewactivityForm">
            <h3 className="NewactivityTitle"> Add a New Activity </h3>
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
                <label htmlFor="password">Price: </label>
                <input
                  name="price"
                  id="price"
                  value={formFields.price}
                  onChange={handleChange}
                />
              </div>
              <br />
              <div className="bottomSpacing">
                <label htmlFor="password">Date: </label>
                <input
                  name="date"
                  id="date"
                  value={formFields.date}
                  type="date"
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
export default NewActivityForm;
