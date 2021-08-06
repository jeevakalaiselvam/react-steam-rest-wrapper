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
  const { games, viewOptionGames, setViewOptionGames } =
    useContext(GamesContext);

  console.log("RENDERING GAMES PAGE");

  return (
    <>
      <Page
        title='All Games'
        rightMenuItem={<GamesPageRightMenu />}
        showRightMenu={true}
      >
        <PageContainer>
          {games.map((game) => {
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
