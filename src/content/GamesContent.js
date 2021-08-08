import React from "react";
import styled from "styled-components";
import GameCardNormal from "../components/card/GameCardNormal";
import GameCardMinimal from "../components/card/GameCardMinimal";

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
          return props.viewType === 0 ? (
            <GameCardMinimal game={game} key={game.id} />
          ) : (
            <GameCardNormal game={game} key={game.id} />
          );
        })}
      </ContainerInner>
    </ContentContainer>
  );
}
