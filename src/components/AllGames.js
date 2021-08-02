import React, { useContext } from "react";
import Game from "./Game";
import UserContext from "../context/UserContext";

export default function AllGames(props) {
  const userGames = useContext(UserContext);

  return (
    <div className='allgames'>
      <h1 className='title'>ALL GAMES</h1>

      <div className='gamesContainer'>
        {userGames.map((game) => {
          return <Game key={game.gameid} game={game} />;
        })}
      </div>
    </div>
  );
}
