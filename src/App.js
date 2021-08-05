import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Overview from "./pages/Overview";
import Milestones from "./pages/Milestones";
import History from "./pages/History";
import Achievements from "./pages/Achievements";
import Games from "./pages/Games";
import GamesBacklog from "./pages/GamesBacklog";
import { GamesContext } from "./context/GameContext";
import ClipLoader from "react-spinners/ClipLoader";

const LoadingContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export default function App() {
  const [games] = useContext(GamesContext);

  return (
    <>
      {games.length > 0 && (
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
      )}
      {!games.length && (
        <LoadingContainer>
          <ClipLoader color={"#edffde"} loading={true} size={150} />
        </LoadingContainer>
      )}
    </>
  );
}
