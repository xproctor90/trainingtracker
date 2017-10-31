import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UserHome from "./pages/UserHome";
import NoMatch from "./pages/NoMatch";
import Baseline from "./pages/Baseline";
import Navi from "./components3/Navi";
// import Auth0 from "./components/auth/auth.js";
import { requireAuth } from './utils/auth-service';
import Callback from './components/Callback';

const App = () =>

   <Router>
     <div>
       <Navi />
       <Switch>
         <Route exact path="/" component={SignIn} />
         <Route exact path="/SignUp" component={SignUp} />
         <Route exact path="/workout" component={UserHome} onEnter={requireAuth} />
         <Route exact path="/Baseline" component={Baseline} />
         <Route path="/callback" component={Callback} />
        {/*<Route exact path="/AboutUs" component={AboutUs} />*/}
        <Route component={NoMatch} />
       </Switch>
     </div>
   </Router>;

export default App;
