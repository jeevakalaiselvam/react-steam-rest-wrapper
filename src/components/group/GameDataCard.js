import React from "react";
import styled from "styled-components";
import AchievementRowForGame from "./AchievementRowForGame";

const GameDataCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const GameNameAndImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const RecentAchievementsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const GameStatContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const GameImageSmall = styled.div`
  background-image: url("${(props) => props.image}");
  width: 100px;
  height: 50px;
  background-size: cover;
`;

const GameTitle = styled.div`
  font-size: 1rem;
  padding: 1rem;
`;

const Title = styled.h4`
  font-size: 1rem;
`;
export default function GameDataCard(props) {
  const game = props.game;

  return (
    <GameDataCardContainer>
      <GameNameAndImageContainer>
        <GameImageSmall image={game.image}></GameImageSmall>
        <GameTitle>{game.name}</GameTitle>
      </GameNameAndImageContainer>
      <RecentAchievementsContainer>
        <AchievementRowForGame game={game} />
      </RecentAchievementsContainer>
      <GameStatContainer></GameStatContainer>
      <Title>Recent Game</Title>
    </GameDataCardContainer>
  );
}
