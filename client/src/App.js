import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./pages/SignIn";
import UserHome from "./pages/UserHome";
import NoMatch from "./pages/NoMatch";
import Baseline from "./pages/Baseline";
import Nav from "./components/Nav";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/workout" component={UserHome} />
        <Route exact path="/baseline" component={Baseline} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
