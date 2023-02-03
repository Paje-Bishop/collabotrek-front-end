import { useState } from "react";
import "./LoginForm.css"

const LoginForm = (props) => {
  const [formFields, setFormFields] = useState({
    email: "",
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
    // if (!formFields.email || !formFields.password) {
    //   setShowError(true);
    // } else {
      console.log(formFields.email, formFields.password)
      setShowError(false);
      props.login(formFields.email, formFields.password);
    // }
    setFormFields({
      email: "",
      password: "",
    });

    // add code to push to backend
    // reload board forms
  };

  return (
    <div className="LoginForm">
      <h3 className="SignUpTitle"> Login Here </h3>
      <form onSubmit={onFormSubmit}>
        <div className="bottomSpacing">
          <label htmlFor="email">Email: </label>
          <input
            name="email"
            id="email"
            value={formFields.email}
            onChange={handleChange}
          />
        </div>
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
        {showError ? <p>Error: An email and password must be provided</p> : null}

        <input type="submit" value="Submit" className="pinkButton" />
      </form>
    </div>
  );
};
export default LoginForm;