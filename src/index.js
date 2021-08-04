import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.scss";
import styled from "styled-components";
import Homepage from "./pages/Homepage";
import Milestones from "./pages/Milestones";
import History from "./pages/History";
import Achievements from "./pages/Achievements";
import Games from "./pages/Games";

console.clear();

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/'>
        <Homepage />
      </Route>
      <Route exact path='/games'>
        <Games />
      </Route>
      <Route exact path='/achievements'>
        <Achievements />
      </Route>
      <Route exact path='/history'>
        <History />
      </Route>
      <Route exact path='/milestones'>
        <Milestones />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);
