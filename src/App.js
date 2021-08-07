import React, { useEffect, useState } from "react";
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
import { getGamesSortedByCompletion } from "./actions/gameActions";

const LoadingContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export default function App() {
  const [games, setGames] = useState([]);
  const [sidebarOpenLeft, setSidebarOpenLeft] = useState(false);
  const [sidebarOpenRight, setSidebarOpenRight] = useState(false);
  const [viewOptionGames, setViewOptionGames] = useState(1);
  const [sortOptionGames, setSortOptionGames] = useState(0);
  const [viewOptionAchievements, setViewOptionAchievements] = useState(1);
  const [sortOptionAchievements, setSortOptionAchievements] = useState(0);

  //Load all games and add it into state
  useEffect(() => {
    const fetchGamesfromAPI = async () => {
      let newGames = [];
      newGames = await getAllGamesFromAPI();
      const realGames = getGamesSortedByCompletion(newGames);
      setGames((oldGames) => realGames);
    };

    fetchGamesfromAPI();
  }, []);

  return (
    <GamesContext.Provider
      value={{
        games,
        sidebarOpenLeft,
        sidebarOpenRight,
        setSidebarOpenLeft,
        setSidebarOpenRight,
        setGames,
        sortOptionGames,
        setSortOptionGames,
        viewOptionGames,
        setViewOptionGames,
        viewOptionAchievements,
        setViewOptionAchievements,
        sortOptionAchievements,
        setSortOptionAchievements,
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
