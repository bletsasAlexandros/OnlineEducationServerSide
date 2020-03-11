import React from "react";
import "./homepage.css";
import logo from "./image.png";
import { Link } from "react-router-dom";

class PersonOnline extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Alex",
      surname: "Bletsas",
      rating: 4
    };
  }

  render() {
    return (
      <div class="container container-style">
        <div class="row">
          <div class="col-md-4">
            <div class="media style">
              <a class="thumbnail pull-left" href="#">
                <img class="media-object img-style" src={logo} />
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="info">
              <h4 class="media-heading">
                {this.state.name} {this.state.surname}
              </h4>{" "}
              <h6>{this.state.rating}</h6>
            </div>
          </div>
          <div class="col-md-4 style1">
            <ul className="info">
              <li>
                <Link to="/OnliEdu/underConstruction">
                  <a href="/OnliEdu/underConstruction">Live Chat</a>
                </Link>
              </li>
              <li>
                <Link to="/OnliEdu/underConstruction">Video Call</Link>
              </li>
              <li>
                <Link to="/OnliEdu/educatorProfile">
                  <a href="/OnliEdu/educatorProfile">Profile</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonOnline;
