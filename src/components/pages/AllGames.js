import React, { useContext, useEffect, useState } from "react";
import Game from "../Game";
import UserContext from "../../context/UserContext";
import { Button, IconButton, makeStyles, Tooltip } from "@material-ui/core";

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

  const useStylesBootstrap = makeStyles((theme) => ({
    arrow: {
      color: theme.palette.common.black,
    },
    tooltip: {
      backgroundColor: theme.palette.common.black,
      fontFamily: "inherit",
    },
  }));

  function DarkToolTip(props) {
    const classes = useStylesBootstrap();

    return <Tooltip arrow classes={classes} {...props} />;
  }

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
            <DarkToolTip title='Sort by Name Ascending' class='sortOptions'>
              <div className='sortOptions'>
                <div className='sortbutton'>
                  <i class='fas fa-sort-alpha-down'></i>
                </div>
              </div>
            </DarkToolTip>
            <DarkToolTip title='Sort by Name Descending' class='sortOptions'>
              <div className='sortOptions'>
                <div className='sortbutton'>
                  <i class='fas fa-sort-alpha-down-alt'></i>
                </div>
              </div>
            </DarkToolTip>
            <DarkToolTip title='Sort by Playtime' class='sortOptions'>
              <div className='sortOptions'>
                <div className='sortbutton'>
                  <i class='fas fa-hourglass'></i>
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
