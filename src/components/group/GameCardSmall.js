import React from "react";
import styled from "styled-components";
import { FaTrophy, FaStar } from "react-icons/fa";

const CardContainer = styled.div`
  cursor: pointer;
  position: relative;
  margin: 0.25rem;
  align-self: flex-start;
  justify-self: flex-start;
  flex-shrink: 1;
  background-color: red;
  background-image: url("${(props) => props.image}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media only screen and (min-width: 1201px) {
    width: 22%;
    height: 15vh;
  }
  @media only screen and (max-width: 1200px) and (min-width: 1025px) {
    width: 30%;
    height: 15vh;
  }
  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    width: 48%;
    height: 20vh;
  }
  @media only screen and (max-width: 768px) and (min-width: 481px) {
    width: 48%;
    height: 20vh;
  }
  @media only screen and (max-width: 480px) and (min-width: 320px) {
    width: 46%;
    height: 20vh;
  }
`;

const GameDetails = styled.div`
  position: absolute;
  width: 100%;
  background-color: rgba(10, 17, 25, 0.8);

  display: flex;
  flex-direction: column;
  overflow: hidden;
  bottom: 0;
`;

const Star = styled.div`
  position: absolute;
  width: 100%;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  top: 0;
  left: 0;
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
  background-color: ${(props) => props.color};
`;

export default function GameCardSmall(props) {
  const game = props.game;

  const getColor = (percentage) => {
    if (percentage >= 80) {
      return "gold";
    } else if (percentage >= 50) {
      return "green";
    } else {
      return "orange";
    }
  };

  return (
    <CardContainer image={game.image}>
      <Star>
        <FaStar />
      </Star>
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
          percentage={(game.completion_percentage / 80) * 100}
          color={getColor(game.completion_percentage)}
        />
      </GameDetails>
    </CardContainer>
  );
}
