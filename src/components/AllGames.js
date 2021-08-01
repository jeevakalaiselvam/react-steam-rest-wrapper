import React, { useEffect, useState } from "react";
import axios from "axios";
import Game from "./Game";

export default function AllGames(props) {
  const [games, setGames] = useState([]);

  const getAllGames = async () => {
    const allGamesResponse = await axios.get(
      process.env.REACT_APP_API_ALL_GAMES
    );
    setGames((oldGames) => {
      const games = allGamesResponse.data.games;
      return games;
    });
  };

  useEffect(() => {
    getAllGames();
  }, []);

  return (
    <div className='allgames'>
      <h1 className='title'>MY LIBRARY</h1>

      <div className='gamesContainer'>
        {games.map((game) => {
          return <Game key={game.gameid} game={game} />;
        })}
      </div>
    </div>
  );
}
