import React from "react";
import styled from "styled-components";
import { FaTrophy } from "react-icons/fa";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  position: relative;
  margin: 1rem;
  justify-content: center;
  background-image: url("${(props) => props.image}");
  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and (min-width: 1201px) {
    width: 200px;
    height: 93px;
  }
  @media only screen and (max-width: 1200px) and (min-width: 1025px) {
    width: 200px;
    height: 93px;
  }
  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    width: 200px;
    height: 93px;
  }
  @media only screen and (max-width: 768px) and (min-width: 481px) {
    width: 200px;
    height: 93px;
    justify-content: center;
  }
  @media only screen and (max-width: 480px) and (min-width: 320px) {
    width: 200px;
    height: 93px;
    justify-content: center;
  }
`;

const GameDetails = styled.div`
  position: absolute;
  width: 100%;
  background-color: rgba(10, 17, 25, 0.8);

  display: flex;
  flex-direction: column;
  bottom: 0;
`;

const AchievementData = styled.div`
  display: flex;
  width: 100%;
  padding: 0.25rem;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const Playtime = styled.div`
  display: flex;
  flex-direction: row;
`;

const Icon = styled.div`
  color: #fff;
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Data = styled.div`
  margin: 0 0.5rem;
  color: #fff;
`;

const Percentage = styled.div`
  width: ${(props) => props.percentage}%;
  height: 2px;
  background-color: red;
`;

export default function GameCardSmall(props) {
  const game = props.game;
  return (
    <CardContainer image={game.image}>
      <GameDetails>
        <AchievementData>
          <Icon>
            <FaTrophy></FaTrophy>
          </Icon>
          <Data>
            {game.completed_achievements_count} /{" "}
            {game.total_achievements_count}
          </Data>
          <Playtime></Playtime>
        </AchievementData>
        <Percentage
          percentage={
            (game.completed_achievements_count /
              game.total_achievements_count) *
            100
          }
        />
      </GameDetails>
    </CardContainer>
  );
}
