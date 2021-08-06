import React, { useState } from "react";
import styled from "styled-components";
import { FaTrophy, FaMedal, FaCheck } from "react-icons/fa";

const CardContainer = styled.div`
  cursor: pointer;
  position: relative;
  margin: 0.25rem;
  align-self: flex-start;
  justify-self: flex-start;
  flex-shrink: 1;
  background-image: url("${(props) => props.image}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 1201px) {
    width: 22%;
    height: 12vh;
  }
  @media only screen and (max-width: 1200px) and (min-width: 1025px) {
    width: 30%;
    height: 15vh;
  }
  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    width: 48%;
    height: 15vh;
  }
  @media only screen and (max-width: 768px) and (min-width: 481px) {
    width: 48%;
    height: 15vh;
  }
  @media only screen and (max-width: 480px) and (min-width: 320px) {
    width: 46%;
    height: 12vh;
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

const Name = styled.div`
  position: absolute;
  width: 100%;
  font-size: 1rem;
  background-color: rgba(10, 17, 25, 0.8);
  display: flex;
  color: #fefefe;
  text-align: center;
  flex-direction: column;
  padding: 0.25rem;
  overflow: hidden;
  top: 0;
  left: 0;
  font-size: 0.85rem;
`;

const AchievementData = styled.div`
  display: flex;
  width: 100%;
  padding: 0.25rem 0.1rem;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
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
  font-size: 0.8rem;
`;

const Remaining = styled.div`
  justify-self: flex-end;
  font-size: 0.8rem;
  padding-right: 1rem;
  text-align: right;
  flex: 1;
`;

const Percentage = styled.div`
  width: ${(props) => props.percentage}%;
  height: 1px;
  background-color: ${(props) => props.color};
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
    <CardContainer
      image={game.image}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {isShown && <Name>{game.name}</Name>}
      <GameDetails>
        <AchievementData>
          {completion >= 80 && (
            <>
              <Icon>
                <FaTrophy></FaTrophy>
              </Icon>
              <Data>
                <FaCheck></FaCheck>
              </Data>
            </>
          )}
          {completion < 80 && (
            <>
              <Icon>
                <FaTrophy></FaTrophy>
              </Icon>
              <Data>
                {game.completed_achievements_count} /{" "}
                {game.total_achievements_count}
              </Data>
            </>
          )}

          {game.completion_percentage < 80 && (
            <Remaining>
              {Math.ceil((80 / 100) * game.total_achievements_count) -
                game.completed_achievements_count}{" "}
              more..
            </Remaining>
          )}
          {game.completion_percentage >= 80 && (
            <Star>
              <FaMedal />
            </Star>
          )}
        </AchievementData>

        {/* <Percentage
          percentage={(game.completion_percentage / 80) * 100}
          color={getColor(game.completion_percentage)}
        /> */}
      </GameDetails>
    </CardContainer>
  );
}
