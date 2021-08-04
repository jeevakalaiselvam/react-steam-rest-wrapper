import { useState, useEffect } from "react";
import { getAllGamesFromAPI } from "../actions/apiActions";
import { GamesContext } from "./GameContext";

export default function GamesProvider({ children }) {
  const [games, setGames] = useState({});

  //Load all games and add it into state
  useEffect(() => {
    const fetchGamesfromAPI = async () => {
      console.log("EFFECT IN GAME PROVIDER GETTING GAMES");
      console.log(process.env.REACT_APP_API_ALL_GAMES);
      let newGames = [];
      newGames = await getAllGamesFromAPI();
      setGames((oldGames) => newGames);
    };

    fetchGamesfromAPI();
  }, []);

  const data = [games];

  return (
    <GamesContext.Provider value={data}>{children} </GamesContext.Provider>
  );
}
