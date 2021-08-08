import React from "react";
import styled from "styled-components";
import GameCardNormal from "../components/card/GameCardNormal";

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: flex-start;
  flex-direction: column;
  overflow: scroll;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const ContainerInner = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  overflow: scroll;
  flex-wrap: wrap;
`;

export default function GamesContent(props) {
  const games = props.games;

  return (
    <ContentContainer>
      <ContainerInner>
        {games.map((game) => {
          return (
            <GameCardNormal
              game={game}
              key={game.id}
              viewType={props.viewType}
            />
          );
        })}
      </ContainerInner>
    </ContentContainer>
  );
}
