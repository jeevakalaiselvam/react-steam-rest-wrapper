import React, { useContext } from "react";
import AchievementIconSmall from "../base/AchievementIconSmall";
import styled from "styled-components";
import { GamesContext } from "../../context/GameContext";
import {
  getNAllGames,
  getNPerfectedGames,
  getNPlayedGames,
  getRandomNUnlockedAchievements,
  getRecentlyUnlockedAllAchievements,
} from "../../actions/achievementActions";
import GameIconSmall from "../base/GameIconSmall";

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
        {getNPerfectedGames(games, 10).map((game) => {
          return <GameIconSmall image={game.image} />;
        })}
      </Container>
      <Container>
        {getNPerfectedGames(games, 10).map((game) => {
          return <GameIconSmall image={game.image} />;
        })}
      </Container>
      <Container>
        {getNPerfectedGames(games, 10).map((game) => {
          return <GameIconSmall image={game.image} />;
        })}
      </Container>
      <Container>
        {getNPerfectedGames(games, 10).map((game) => {
          return <GameIconSmall image={game.image} />;
        })}
      </Container>
    </SetContainer>
  );
}
