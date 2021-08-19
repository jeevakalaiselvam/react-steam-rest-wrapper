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
  padding: 1rem;
  scrollbar-width: thin;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 1rem;

  @media only screen and (max-width: 840px) {
    padding-bottom: 3rem;
  }
`;

const ContainerInner = styled.div`
  display: flex;
  width: 100%;
  justify-self: flex-start;
  justify-content: center;
  overflow: scroll;
  flex-wrap: wrap;
`;

export default function RandomContent(props) {
  const game = props.game;

  return (
    <ContentContainer>
      <ContainerInner>
        <GameCardNormal game={game} />
      </ContainerInner>
    </ContentContainer>
  );
}
