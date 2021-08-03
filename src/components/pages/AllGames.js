import React, { useContext, useEffect, useState } from "react";
import Game from "../Game";
import UserContext from "../../context/UserContext";
import { Button, IconButton, makeStyles, Tooltip } from "@material-ui/core";
import { getGamesSortedByOption } from "../../helpers/achievementHelper";
import DarkToolTip from "../core/DarkToolTip";

export default function AllGames(props) {
  const [games, setGames] = useState({});
  const [filteredGames, setFilteredGames] = useState({});
  const { userGames } = useContext(UserContext);
  const [sortOption, setSortOption] = useState(0);

  useEffect(() => {
    console.clear();
    console.log("RENDERING EFFECT, DEPENDENCY AFFECTED");
    const sortedGames = getGamesSortedByOption(userGames, sortOption);
    setFilteredGames({});
    setFilteredGames(sortedGames);
  }, [userGames, sortOption]);

  const searchTextChangedHandler = (e) => {
    const searchFilteredGames = userGames.filter((game) => {
      return game.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    console.log("SEARCH FILTERED GAMES ->", searchFilteredGames);

    setFilteredGames((oldFilteredGames) => searchFilteredGames);
  };

  const setSorting = (sortOption) => {
    console.log("CHANGING SORT INDEX STATE -> ", sortOption);
    setSortOption(sortOption);
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
          <div className='sortContainer'>
            <DarkToolTip
              title='Sort by Completion'
              className='sortOptions'
              key='0'
            >
              <div className='sortOptions'>
                <div className='sortbutton' onClick={() => setSorting(0)}>
                  <i className='fas fa-medal'></i>
                </div>
              </div>
            </DarkToolTip>
            <DarkToolTip
              title='Sort by Playtime'
              className='sortOptions'
              key='1'
            >
              <div className='sortOptions'>
                <div className='sortbutton' onClick={() => setSorting(1)}>
                  <i className='fas fa-hourglass'></i>
                </div>
              </div>
            </DarkToolTip>
            <DarkToolTip
              title='Sort by Name Ascending'
              className='sortOptions'
              key='2'
            >
              <div className='sortOptions'>
                <div className='sortbutton' onClick={() => setSorting(2)}>
                  <i className='fas fa-sort-alpha-down'></i>
                </div>
              </div>
            </DarkToolTip>
            <DarkToolTip
              title='Sort by Name Descending'
              className='sortOptions'
              key='3'
            >
              <div className='sortOptions'>
                <div className='sortbutton' onClick={() => setSorting(3)}>
                  <i className='fas fa-sort-alpha-down-alt'></i>
                </div>
              </div>
            </DarkToolTip>
          </div>
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
