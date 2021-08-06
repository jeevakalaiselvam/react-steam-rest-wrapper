import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Page from "../components/pages/Page";
import { GamesContext } from "../context/GameContext";
import GameCardMedium from "../components/group/GameCardMedium";
import Card from "../components/core/Card";
import GamesPageRightMenu from "../menu/GamesPageRightMenu";
import GameCardSmall from "../components/group/GameCardSmall";
import {
  getGamesSortedByCompletion,
  getGamesSortedByPlaytime,
} from "../actions/gameActions";

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  overflow: scroll;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default function Games(props) {
  const { games, viewOptionGames, sortOptionGames } = useContext(GamesContext);

  console.log("RENDERING GAMES PAGE");

  const getSortedGames = () => {
    console.log("Sorting games");
    let sortedGames = [];
    if (sortOptionGames === 0) {
      sortedGames = getGamesSortedByCompletion(games);
    } else if (sortOptionGames === 1) {
      sortedGames = getGamesSortedByPlaytime(games);
    } else {
      sortedGames = games;
    }

    console.log("GAMES IN CONTEXT ", games);
    console.log("NEW GAME AT TOP -> ", sortedGames[0]);
    return sortedGames;
  };

  useEffect(() => {
    getSortedGames(sortOptionGames);
  }, [sortOptionGames]);

  return (
    <>
      <Page
        title='All Games'
        rightMenuItem={<GamesPageRightMenu />}
        showRightMenu={true}
      >
        <PageContainer>
          {getSortedGames().map((game) => {
            if (viewOptionGames === 0)
              return <GameCardSmall game={game} key={game.id} />;
            else if (viewOptionGames === 1)
              return <GameCardMedium game={game} key={game.id} />;
            else return <GameCardMedium game={game} key={game.id} />;
          })}
        </PageContainer>
      </Page>
    </>
  );
}
