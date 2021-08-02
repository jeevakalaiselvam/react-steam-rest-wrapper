import React, { useEffect, useState } from "react";
import Game from "./Game";
import { getAllGamesFromSteamWrapper } from "../actions/steam";

export default function AllGames(props) {
  const [games, setGames] = useState([]);

  const getAllGames = async () => {
    const allGames = await getAllGamesFromSteamWrapper();
    console.log(allGames);
    setGames((oldGames) => {
      return allGames.games;
    });
  };

  useEffect(() => {
    getAllGames();
  }, []);

  return (
    <div className='allgames'>
      <h1 className='title'>ALL GAMES</h1>

      <div className='gamesContainer'>
        {games.map((game) => {
          return <Game key={game.appid} game={game} />;
        })}
      </div>
    </div>
  );
}
