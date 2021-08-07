import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Achievements from "./pages/Achievements";
import Games from "./pages/Games";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Games />
          </Route>
          <Route exact path='/games'>
            <Games />
          </Route>
          <Route exact path='/achievements'>
            <Achievements />
          </Route>
        </Switch>
      </Router>
      ,
    </>
  );
}
