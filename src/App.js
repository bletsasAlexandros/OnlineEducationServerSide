import React from "react";
import "./App.css";
import Login from "./login";
import SignUp from "./signup";
import HomePage from "./homepage";
import PersonOnline from "./homepagecomp/persononline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import underConstruction from "./homepagecomp/underConstruction";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/OnliEdu/" exact component={Login} />
        <Route path="/OnliEdu/signup" component={SignUp} />
        <Route
          path="/OnliEdu/homepagecomp/personOnline"
          component={PersonOnline}
        />
        <Route path="/OnliEdu/homepage" component={HomePage} />
        <Route
          path="/OnliEdu/underConstruction"
          component={underConstruction}
        />
      </Switch>
    </Router>
  );
}

export default App;
