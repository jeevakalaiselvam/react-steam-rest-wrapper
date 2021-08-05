import React, { useContext } from "react";
import styled from "styled-components";
import { GamesContext } from "../../context/GameContext";
import { getNPerfectedGames } from "../../actions/achievementActions";
import GameIconSmall from "../base/GameIconSmall";
import { v4 as uuidv4 } from "uuid";

const SetContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 100%;
  overflow: hidden;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  overflow: hidden;
`;

export default function PerfectedGamesImages(props) {
  const [games] = useContext(GamesContext);

  return (
    <SetContainer>
      <Container>
        {getNPerfectedGames(games, 3).map((game) => {
          return <GameIconSmall image={game.image} key={uuidv4()} />;
        })}
      </Container>
      <Container>
        {getNPerfectedGames(games, 3).map((game) => {
          return <GameIconSmall image={game.image} key={uuidv4()} />;
        })}
      </Container>
      <Container>
        {getNPerfectedGames(games, 3).map((game) => {
          return <GameIconSmall image={game.image} key={uuidv4()} />;
        })}
      </Container>
      <Container>
        {getNPerfectedGames(games, 3).map((game) => {
          return <GameIconSmall image={game.image} key={uuidv4()} />;
        })}
      </Container>
    </SetContainer>
  );
}
