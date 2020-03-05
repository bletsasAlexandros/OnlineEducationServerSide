import React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import "./login.css";
import { Link } from "react-router-dom";

/*Simple login form.*/

class Login extends React.Component {
  render() {
    return (
      <div className="background">
        <Form className="login-form">
          <h1 className="font-weight-bold text-center">OnliEdu</h1>
          <h6 className="text-center font-weight-light ">
            "learning without limits"
          </h6>
          <br />
          <div className="shadow-lg p-3 mb-5 bg-white rounded">
            <FormGroup>
              <Input type="email" placeholder="email" required></Input>
              <span className="focus-border" />
            </FormGroup>
            <FormGroup>
              <Input type="password" placeholder="password" required></Input>
              <span className="focus-border" />
            </FormGroup>
            <br />
            <Button className="btn-lg btn-dark btn-block butn-color">
              Log in
            </Button>
            <br />
            <div className="text-center">
              {/*If the person wnat to sign up he will be redirected to
              sign up pahe*/}
              <Link to="/OnliEdu/signup">
                <a href="/sign-up">Sign Up</a>
              </Link>
              <span className="p-2">|</span>
              <a href="/sign-up">Forgot Password</a>
            </div>
          </div>
        </Form>
      </div>
    );
  }
}

export default Login;
