import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GameContext } from "./context/GameContext";
import Achievements from "./pages/Achievements";
import Games from "./pages/Games";

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
          </Switch>
        </Router>
      </GameContext.Provider>
    </>
  );
}
