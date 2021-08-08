import React from "react";
import styled from "styled-components";
import GameCardNormal from "../components/card/GameCardNormal";
import GameCardMinimal from "../components/card/GameCardMinimal";
import { FaBackward, FaForward } from "react-icons/fa";
import { HEADER_TOTAL_GAMES } from "../helper/storage";

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
  flex: 1;
  justify-content: center;
  overflow: scroll;
  flex-wrap: wrap;
`;

const Pagination = styled.div`
  display: flex;
  padding: 0.25rem;
  width: 100%;
  justify-content: center;

  @media only screen and (max-width: 840px) {
    position: fixed;
    background-color: rgba(10, 17, 25, 1);
    padding: 0.25rem 0;
    bottom: 0;
  }
`;

const Page = styled.div`
  background-image: url("./images/bgcard.png");
  padding: 0.25rem 0.75rem;
  cursor: pointer;
  margin: 0 1rem;
  border: 1px solid #ffffff00;
  &:hover {
    color: #f5f5f5;
    border: 1px solid #f5f5f5;
  }
`;
const PageCount = styled.div`
  padding: 0.25rem 0.75rem;
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
      <Pagination>
        <Page onClick={props.moveToPageLeft}>
          <FaBackward />
        </Page>
        <PageCount>
          {props.page} /{" "}
          {Math.ceil(localStorage.getItem(HEADER_TOTAL_GAMES) / 25)}
        </PageCount>
        <Page onClick={props.moveToPageRight}>
          <FaForward />
        </Page>
      </Pagination>
    </ContentContainer>
  );
}
