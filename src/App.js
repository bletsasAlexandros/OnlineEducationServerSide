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
      {/* <Login /> */}
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/personOnline" component={PersonOnline} />
        <Route path="/homepage" component={HomePage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/underConstruction" component={underConstruction} />
      </Switch>
    </Router>
  );
}

export default App;
