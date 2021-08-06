import React, { useContext } from "react";
import styled from "styled-components";
import Page from "../components/pages/Page";
import { GamesContext } from "../context/GameContext";
import GameCardMedium from "../components/group/GameCardMedium";
import Card from "../components/core/Card";
import GamesPageRightMenu from "../menu/GamesPageRightMenu";
import GameCardSmall from "../components/group/GameCardSmall";

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
  const { games, gamesViewType } = useContext(GamesContext);
  console.log("GAMEVIEWTYPE: ", gamesViewType);

  return (
    <>
      <Page
        title='All Games'
        rightMenuItem={<GamesPageRightMenu />}
        showRightMenu={true}
      >
        {gamesViewType === 0 && console.log("RENDERING SMALL")}
        {gamesViewType === 1 && console.log("RENDERING MEDIUM")}
        {gamesViewType === 0 && (
          <PageContainer>
            {games.map((game) => {
              return <GameCardSmall game={game} key={game.id} />;
            })}
          </PageContainer>
        )}
        {gamesViewType === 1 && (
          <PageContainer>
            {games.map((game) => {
              return <GameCardMedium game={game} key={game.id} />;
            })}
          </PageContainer>
        )}
      </Page>
    </>
  );
}
