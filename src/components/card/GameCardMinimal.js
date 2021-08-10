import React from "react";
import { FaCheck, FaMedal, FaTrophy } from "react-icons/fa";
import styled from "styled-components";
import { SELECTED_GAME, _STORAGE_WRITE } from "../../helper/storage";

const Card = styled.div`
  background-color: rgba(10, 17, 25, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;
  margin: 4px;
  background-image: url("${(props) => props.image}");
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;

  @media only screen and (min-width: 1451px) {
    width: 18%;
    height: 12vh;
  }
  @media only screen and (max-width: 1450px) and (min-width: 1401px) {
    width: 22%;
    height: 12vh;
  }
  @media only screen and (max-width: 1400px) and (min-width: 1361px) {
    width: 30%;
    height: 12vh;
  }
  @media only screen and (max-width: 1360px) and (min-width: 1201px) {
    width: 30%;
    height: 12vh;
  }
  @media only screen and (max-width: 1200px) and (min-width: 1061px) {
    width: 30%;
    height: 12vh;
  }
  @media only screen and (max-width: 1060px) and (min-width: 961px) {
    width: 46%;
    height: 14vh;
  }
  @media only screen and (max-width: 960px) and (min-width: 769px) {
    width: 46%;
    height: 14vh;
  }
  @media only screen and (max-width: 768px) and (min-width: 631px) {
    width: 46%;
    height: 14vh;
  }
  @media only screen and (max-width: 630px) and (min-width: 481px) {
    width: 46%;
    height: 14vh;
  }
  @media only screen and (max-width: 480px) {
    width: 46%;
    height: 13vh;
  }
`;

const IconInner = styled.div`
  font-size: 1rem;
  color: #fefefe;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(10, 17, 25, 0.8);
  display: flex;
  width: 100%;
  flex-direction: row;
`;

const AchievementData = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  color: #fefefe;
  justify-content: flex-start;
  padding: 0.25rem 0.5rem;
`;
const ToGet = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
`;

const Medal = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  color: gold;
  justify-content: flex-end;
  margin-right: 0.5rem;
`;

const AchievementCount = styled.div`
  margin-left: 0.25rem;
  font-size: 0.9rem;
`;

export default function GameCardMinimal(props) {
  const {
    image,
    id,
    completion_percentage,
    completed_achievements_count,
    total_achievements_count,
  } = props.game;

  const getRemainingForTarget = () => {
    return Math.floor(
      (80 / 100) * total_achievements_count - completed_achievements_count
    );
  };

  return (
    <Card
      image={image}
      onClick={() => {
        console.log(props.game);
        _STORAGE_WRITE(SELECTED_GAME, props.game.id);
        window.location.href = "/game";
      }}
    >
      <InnerContainer>
        <AchievementData>
          <IconInner>
            <FaTrophy />
          </IconInner>
          <AchievementCount>
            {completion_percentage < 80 &&
              `${completed_achievements_count} / ${total_achievements_count}`}

            {completion_percentage >= 80 && <FaCheck />}
          </AchievementCount>
        </AchievementData>
        {completion_percentage < 80 && (
          <ToGet>{getRemainingForTarget()} more...</ToGet>
        )}
        {completion_percentage >= 80 && (
          <Medal>
            <FaMedal />
          </Medal>
        )}
      </InnerContainer>
    </Card>
  );
}
