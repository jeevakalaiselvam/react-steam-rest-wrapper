import React, { useContext } from "react";
import styled from "styled-components";
import Page from "../components/pages/Page";
import { GamesContext } from "../context/GameContext";
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

export default function Games() {
  const [games] = useContext(GamesContext);

  return (
    <>
      <Page title='All Games'>
        <PageContainer>
          {games.slice(0, 30).map((game) => {
            return <GameCardSmall game={game} key={game.id} />;
          })}
        </PageContainer>
      </Page>
    </>
  );
}
