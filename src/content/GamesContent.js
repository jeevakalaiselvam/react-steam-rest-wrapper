import React from "react";
import { useState } from "react";
import styled from "styled-components";
import GameCardSmall from "../components/card/GameCardSmall";

const ContentContainer = styled.div`
  min-height: 100vh;
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  overflow: scroll;
  flex-wrap: wrap;
`;

export default function GamesContent(props) {
  const games = props.games;

  return (
    <ContentContainer>
      {games.map((game) => {
        return <GameCardSmall game={game} key={game.id} />;
      })}
    </ContentContainer>
  );
}
