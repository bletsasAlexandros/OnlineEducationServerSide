import React from "react";
import { GoMail } from "react-icons/go";

function NavBar() {
  return (
    <nav>
      <h2>OnliEdu</h2>
      <h3 className="a">
        <GoMail />{" "}
      </h3>
      <h5>My profile</h5>
    </nav>
  );
}

export default NavBar;
