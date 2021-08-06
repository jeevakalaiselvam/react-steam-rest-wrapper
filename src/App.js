import React, { useContext, useEffect, useState } from "react";
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
import { getAllGamesFromAPI } from "./actions/apiActions";
import {
  getGamesSortedByCompletion,
  getGamesSortedByPlaytime,
} from "./actions/gameActions";

const LoadingContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export default function App() {
  const [games, setGames] = useState([]);
  const [viewOptionGames, setViewOptionGames] = useState(0);

  //Load all games and add it into state
  useEffect(() => {
    const fetchGamesfromAPI = async () => {
      let newGames = [];
      newGames = await getAllGamesFromAPI();
      const realGames = getGamesSortedByCompletion(newGames);
      const testGames = getGamesSortedByCompletion(newGames).slice(0, 50);
      setGames((oldGames) => testGames);
    };

    fetchGamesfromAPI();
  }, []);

  return (
    <GamesContext.Provider
      value={{
        games,
        setGames,
        viewOptionGames,
        setViewOptionGames,
      }}
    >
      <>
        {games && games.length > 0 && (
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
    </GamesContext.Provider>
  );
}
