import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./views/dashboard/Dashboard.js";
import SignIn from "./views/Login/SignIn.js";
import SignUp from "./views/Login/SignUp.js";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/Signin">
          <SignIn />
        </Route>
        <Route path="/Signup">
          <SignUp />
        </Route>
        <Route path="/Dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
