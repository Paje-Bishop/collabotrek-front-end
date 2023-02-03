
import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";
import "./Login.css"

const Login = (props) => {
  return(
    <div className="row">
      <div className="col">
        <div id="loginDiv">
          <LoginForm 
          login={props.login}
          />
        </div>
      </div>
      <div className="col">
        <div id="signUpDiv">
          <SignUpForm />
        </div>
      </div>
    </div>
  )
};

export default Login;