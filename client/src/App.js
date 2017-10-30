import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UserHome from "./pages/UserHome";
import NoMatch from "./pages/NoMatch";
import Baseline from "./pages/Baseline";
import Navi from "./components3/Navi";

const App = () =>

   <Router>
     <div>
       <Navi />
       <Switch>
         <Route exact path="/" component={SignIn} />
         <Route exact path="/SignUp" component={SignUp} />
         <Route exact path="/workout" component={UserHome} />
         <Route exact path="/Baseline" component={Baseline} />
        {/*<Route exact path="/AboutUs" component={AboutUs} />*/}
        <Route component={NoMatch} />
       </Switch>
     </div>
   </Router>;

export default App;
