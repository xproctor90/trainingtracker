import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UserHome from "./pages/UserHome";
import NoMatch from "./pages/NoMatch";
import Baseline from "./pages/Baseline";
import Nav from "./components/Nav";
import Auth0 from "./components/auth/auth.js";

const App = () =>

  
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/workout" component={UserHome} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
