import React, { useContext, useEffect, useState } from "react";
import Game from "./Game";
import UserContext from "../context/UserContext";

export default function AllGames(props) {
  const [games, setGames] = useState({});
  const userGames = useContext(UserContext);

  let gamesHavingAchievements = userGames.filter(
    (game) => game.schema_achievements.length > 0
  );

  useEffect(() => {
    setGames((oldGames) => gamesHavingAchievements);
  }, []);

  const searchTextChangedHandler = (e) => {
    const filteredGames = gamesHavingAchievements.filter((game) => {
      return game.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setGames((oldGames) => filteredGames);
  };

  return (
    <div className='allgames'>
      <div className='searchContainer'>
        <input
          type='text'
          className='searchText'
          placeholder='Search for a game'
          onChange={searchTextChangedHandler}
        />
      </div>

      <div className='gamesContainer'>
        <div className='gameInnerContainer'>
          {games.length > 0 &&
            games.map((game) => {
              return <Game key={game.game_id} game={game} />;
            })}
        </div>
      </div>
    </div>
  );
}
