import React, { useState } from "react";
import styled from "styled-components";
import { FaTrophy, FaMedal } from "react-icons/fa";
import BlackToolTip from "../ui/BlackToolTip";

const CardContainerOuter = styled.div`
  cursor: pointer;
  margin: 0.25rem;
  align-self: flex-start;
  position: relative;
  justify-self: flex-start;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 1px hsl(0deg 0% 100% / 10%);

  @media only screen and (min-width: 1201px) {
    width: 15%;
    height: 8vh;
  }
  @media only screen and (max-width: 1200px) and (min-width: 1025px) {
    width: 20%;
    height: 8vh;
  }
  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    width: 30%;
    height: 8vh;
  }
  @media only screen and (max-width: 768px) and (min-width: 481px) {
    width: 48%;
    height: 11vh;
  }
  @media only screen and (max-width: 480px) and (min-width: 320px) {
    width: 47%;
    height: 11vh;
  }

  &:hover {
    border: 0.5px solid white;
  }
`;

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("${(props) => props.image}");
  background-repeat: no-repeat;
  background-position: center;

  border-radius: 2px;
  background-size: cover;
`;

const Star = styled.div`
  width: 100%;
  font-size: 1rem;
  z-index: 100;
  color: gold;
  justify-self: flex-end;
  font-size: 0.9rem;
  padding-right: 1rem;
  text-align: right;
  flex: 1;
`;

const GameNameAndStatusContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  font-size: 1rem;
  background-color: rgba(10, 17, 25, 0.8);
  display: flex;
  color: #fefefe;
  text-align: center;
  flex-direction: column;
  padding: 0.25rem;
  font-size: 0.8rem;
`;

const Name = styled.div`
  color: #fefefe;
  text-align: center;

  padding: 0.25rem;
  font-size: 0.8rem;
`;

const AchievementCount = styled.div`
  color: #fefefe;
  text-align: center;

  padding: 0.25rem;
  font-size: 0.8rem;
`;

const ToGet = styled.div`
  color: #aaa;
  text-align: center;

  padding: 0.25rem;
  font-size: 0.8rem;
`;

export default function GameCardSmall(props) {
  const game = props.game;
  const completion = game.completion_percentage;
  const [isShown, setIsShown] = useState(false);

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
    <CardContainerOuter
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {isShown && (
        <GameNameAndStatusContainer>
          <Name>{game.name}</Name>
          <AchievementCount>
            {game.completed_achievements_count} /{" "}
            {game.total_achievements_count}
          </AchievementCount>
          <ToGet>
            {" "}
            {Math.ceil((80 / 100) * game.total_achievements_count) -
              game.completed_achievements_count}{" "}
            more..
          </ToGet>
        </GameNameAndStatusContainer>
      )}
      <CardContainer image={game.image}>
        {game.completion_percentage >= 80 && (
          <Star>
            <FaMedal />
          </Star>
        )}
      </CardContainer>
    </CardContainerOuter>
  );
}
