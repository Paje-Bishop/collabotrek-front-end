import { useState, props } from "react";

const SignUpForm = () => {
  const [formFields, setFormFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
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
    if (!formFields.title || !formFields.owner) {
      setShowError(true);
    } else {
      setShowError(false);
      props.createBoard(formFields.title, formFields.owner);
    }
    setFormFields({
      title: "",
      owner: "",
    });

    // add code to push to backend
    // reload board forms
  };

  return (
    <div className="SignUpForm">
      <h3 className="SignUpTitle"> Sign Up Here </h3>
      <form onSubmit={onFormSubmit}>
        <div className="bottomSpacing">
          <label htmlFor="firstName">First Name: </label>
          <input
            name="firstName"
            id="firstName"
            value={formFields.firstName}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="bottomSpacing">
          <label htmlFor="lastName">Last Name: </label>
          <input
            name="lastName"
            id="lastName"
            value={formFields.lastName}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="bottomSpacing">
          <label htmlFor="email">Email: </label>
          <input
            name="email"
            id="email"
            value={formFields.email}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="bottomSpacing">
          <label htmlFor="password">Password: </label>
          <input
            name="password"
            id="password"
            value={formFields.password}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="bottomSpacing">
        </div>
        {showError ? <p>Error: Owner and Title need to be filled out</p> : null}

        <input type="submit" value="Submit" className="pinkButton" />
      </form>
    </div>
  );
};
export default SignUpForm;
