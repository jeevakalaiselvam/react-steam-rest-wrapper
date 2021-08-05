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
  align-items: center;

  @media only screen and (min-width: 1201px) {
  }
  @media only screen and (max-width: 1200px) and (min-width: 1025px) {
  }
  @media only screen and (max-width: 1024px) and (min-width: 769px) {
  }
  @media only screen and (max-width: 768px) and (min-width: 481px) {
    justify-content: center;
  }
  @media only screen and (max-width: 480px) and (min-width: 320px) {
    justify-content: center;
  }
`;

export default function Games() {
  const [games] = useContext(GamesContext);

  return (
    <>
      <Page title='All Games'>
        <PageContainer>
          {games.map((game) => {
            return <GameCardSmall game={game} key={game.id} />;
          })}
        </PageContainer>
      </Page>
    </>
  );
}
