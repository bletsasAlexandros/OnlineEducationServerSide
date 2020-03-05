import React from "react";
import { Dropdown, DropdownButton, DropwonItem } from "react-bootstrap";
import "./homepage.css";

class LessonsSelection extends React.Component {
  constructor() {
    super();
    this.state = {
      lesson: ["Math", "Physics", "English", "Chemistry", "Literature"]
    };
  }

  render() {
    return (
      <DropdownButton
        id="dropdown-basic-button"
        title="Select lesson"
        className="dropdown-style"
      >
        <Dropdown.Item href="#/action-1">{this.state.lesson[0]}</Dropdown.Item>
        <Dropdown.Item href="#/action-2">{this.state.lesson[1]}</Dropdown.Item>
        <Dropdown.Item href="#/action-3">{this.state.lesson[2]}</Dropdown.Item>
        <Dropdown.Item href="#/action-4">{this.state.lesson[3]}</Dropdown.Item>
        <Dropdown.Item href="#/action-5">{this.state.lesson[4]}</Dropdown.Item>
      </DropdownButton>
    );
  }
}

export default LessonsSelection;
