import React, { useContext } from "react";
import styled from "styled-components";
import Page from "../components/pages/Page";
import { GamesContext } from "../context/GameContext";
import GameCardSmall from "../components/group/GameCardSmall";
import Card from "../components/core/Card";
import GamesPageRightMenu from "../menu/GamesPageRightMenu";

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  overflow: scroll;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default function Games() {
  const [games] = useContext(GamesContext);

  return (
    <>
      <Page
        title='All Games'
        rightMenuItem={<GamesPageRightMenu />}
        showRightMenu={true}
      >
        <PageContainer>
          {games.slice(0, 50).map((game) => {
            return <GameCardSmall game={game} key={game.id} />;
          })}
        </PageContainer>
      </Page>
    </>
  );
}
