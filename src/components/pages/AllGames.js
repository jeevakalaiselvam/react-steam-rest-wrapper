import React, { useContext, useEffect, useState } from "react";
import Game from "../Game";
import UserContext from "../../context/UserContext";

export default function AllGames(props) {
  const [filteredGames, setFilteredGames] = useState({});
  const { userGames } = useContext(UserContext);

  useEffect(() => {
    setFilteredGames(userGames);
  }, [userGames]);

  const searchTextChangedHandler = (e) => {
    const searchFilteredGames = userGames.filter((game) => {
      return game.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    console.log("SEARCH FILTERED GAMES ->", searchFilteredGames);
    setFilteredGames((oldFilteredGames) => searchFilteredGames);
  };

  return (
    <section className='main'>
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
            {filteredGames.length > 0 &&
              filteredGames.map((game) => {
                return <Game key={game.game_id} game={game} />;
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
