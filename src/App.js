import React from "react";
import "./App.css";
import Login from "./login";
import SignUp from "./signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Login />
      <Switch>
        <Route path="/signup" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
