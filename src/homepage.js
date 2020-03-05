import React from "react";
import NavBar from "./homepagecomp/navbar";
import "./homepagecomp/homepage.css";
import LessonSelection from "./homepagecomp/lessonsSelect";

/*This will be the main page*/

function HomePage() {
  return (
    <div>
      <NavBar />
      <br />
      <LessonSelection />
    </div>
  );
}

export default HomePage;
