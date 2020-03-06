import React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { Link } from "react-router-dom";
import "./signup.css";

/*The sign up form. The person that signs up has to put his personal info
Later that will be stored in a base*/

function SignUp() {
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
            <Input type="text" placeholder="First Name" required></Input>
            <span className="focus-border" />
          </FormGroup>
          <FormGroup>
            <Input type="text" placeholder="Last Name" required></Input>
            <span className="focus-border" />
          </FormGroup>
          <FormGroup>
            <Input type="email" placeholder="email" required></Input>
            <span className="focus-border" />
          </FormGroup>
          <FormGroup>
            <Input type="password" placeholder="password" required></Input>
            <span className="focus-border" />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              placeholder="Repeat password"
              required
            ></Input>
            <span className="focus-border" />
          </FormGroup>
          <br />
          {/* <div>
            <input type="checkbox" />
            <p>Professor</p>
            <input type="checkbox" />
            <p>Student</p>
          </div> */}
          <Button className="btn-lg btn-dark btn-block butn-color">
            Sign up
          </Button>
          <Link to="/OnliEdu/homepage">Continue to page</Link>
          <br />
        </div>
      </Form>
    </div>
  );
}

export default SignUp;
