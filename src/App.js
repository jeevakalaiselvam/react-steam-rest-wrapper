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

  //Load all games and add it into state
  useEffect(() => {
    const fetchGamesfromAPI = async () => {
      console.log("EFFECT IN GAME PROVIDER GETTING GAMES");
      console.log(process.env.REACT_APP_API_ALL_GAMES);
      let newGames = [];
      newGames = await getAllGamesFromAPI();
      setGames((oldGames) => newGames.slice(0, 50));
    };

    fetchGamesfromAPI();
  }, []);

  const contextSortGamePlaytime = () => {
    console.log("Sorting games by playtime in Context");
    const sortedGamesByPlaytime = getGamesSortedByPlaytime(games);

    setGames((oldGames) => {});
    setGames((oldGames) => sortedGamesByPlaytime);
    console.log("NEW GAMES AFTER PLAYTIME -> ", games[0]);
  };

  const contextSortGameCompletion = () => {
    console.log("Sorting games by completion in Context");
    const sortedGamesByCompletion = getGamesSortedByCompletion(games);

    setGames((oldGames) => {});
    setGames((oldGames) => sortedGamesByCompletion);
    console.log("NEW GAMES AFTER COMPLETION -> ", games[0]);
  };

  return (
    <GamesContext.Provider
      value={{
        games,
        contextSortGamePlaytime,
        contextSortGameCompletion,
        setGames,
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
                <Games games={games} />
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
        {!games && (
          <LoadingContainer>
            <ClipLoader color={"#edffde"} loading={true} size={150} />
          </LoadingContainer>
        )}
      </>
    </GamesContext.Provider>
  );
}
