import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GameContext } from "./context/GameContext";
import Achievements from "./pages/Achievements";
import Backlog from "./pages/Backlog";
import Games from "./pages/Games";
import History from "./pages/History";

export default function App() {
  const [navLeftOpen, setNavLeftOpen] = useState(false);
  const [navRightOpen, setNavRightOpen] = useState(false);

  const data = { navLeftOpen, setNavLeftOpen, navRightOpen, setNavRightOpen };

  return (
    <>
      <GameContext.Provider value={data}>
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
            <Route exact path='/history'>
              <History />
            </Route>
            <Route exact path='/backlog'>
              <Backlog />
            </Route>
          </Switch>
        </Router>
      </GameContext.Provider>
    </>
  );
}
