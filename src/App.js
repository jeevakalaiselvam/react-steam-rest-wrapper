import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Overview from "./pages/Overview";
import Milestones from "./pages/Milestones";
import History from "./pages/History";
import Achievements from "./pages/Achievements";
import Games from "./pages/Games";
import GamesBacklog from "./pages/GamesBacklog";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Overview />
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
        <Route exact path='/gamesbacklog'>
          <GamesBacklog />
        </Route>
      </Switch>
    </Router>
  );
}
