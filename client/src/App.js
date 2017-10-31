import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Navbar, Button } from 'react-bootstrap';import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AboutPage from "./pages/AboutPage";
import UserHome from "./pages/UserHome";
import Home from "./pages/Home/Home.js";
import NoMatch from "./pages/NoMatch";
import Baseline from "./pages/Baseline/Baseline.js";
import Navi from "./components3/Navi";

//import Auth0 from "./components/auth/auth.js";  

const App = () =>

   <Router>
     <div>
       <Navi />
       <Switch>
         <Route exact path="/" component={SignIn} />
         <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/AboutPage" component={AboutPage} />
         <Route exact path="/workout" component={UserHome} />
         <Route exact path="/Baseline" component={Baseline} />
        <Route exact path="/Home" component={Home} />
        <Route component={NoMatch} />
       </Switch>
     </div>
   </Router>;

export default App;
