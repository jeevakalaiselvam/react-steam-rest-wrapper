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
  getGamesSortedByNameAZ,
  getGamesSortedByNameZA,
  getGamesSortedByPlaytime,
} from "../actions/gameActions";
import MainLeftMenu from "../menu/MainLeftMenu";

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

  const getSortedGames = () => {
    let sortedGames = [];
    if (sortOptionGames === 0) {
      sortedGames = getGamesSortedByCompletion(games);
    } else if (sortOptionGames === 1) {
      sortedGames = getGamesSortedByPlaytime(games);
    } else if (sortOptionGames === 2) {
      sortedGames = getGamesSortedByNameAZ(games);
    } else if (sortOptionGames === 3) {
      sortedGames = getGamesSortedByNameZA(games);
    } else {
      sortedGames = games;
    }

    return sortedGames;
  };

  return (
    <>
      <Page
        title='All Games'
        rightMenuItem={<GamesPageRightMenu />}
        leftMenuItem={<MainLeftMenu />}
        sidebarLeftWidth='180px'
        sidebarRightWidth='180px'
        sidebarRightVisible={true}
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
