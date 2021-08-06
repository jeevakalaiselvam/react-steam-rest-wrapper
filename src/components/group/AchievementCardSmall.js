import React from "react";
import styled from "styled-components";
import Card from "../core/Card";
import BlackToolTip from "../ui/BlackToolTip";
import "../../index.scss";

const CardContainerOuter = styled.div`
  cursor: pointer;
  margin: 0.25rem;
  align-self: flex-start;
  position: relative;
  width: 60px;
  height: 60px;
  justify-self: flex-start;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(10, 17, 25, 0.3);

  &:hover {
    border: 0.5px solid #f5f5f5;
  }
`;

const AchivementImageContainer = styled.div`
  width: 100%;
  background-size: cover;
  height: 100%;

  background-image: url("${(props) => props.image}");
`;

const AchievementInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AchievementName = styled.div`
  color: rgb(85, 174, 206);
`;
const AchievementDesc = styled.div``;
const AchievementGame = styled.div`
  color: #666666;
`;

export default function AchievementCardSmall(props) {
  const achievement = props.achievement;

  const achievementInfo = (
    <AchievementInfo>
      <AchievementName>{achievement.name}</AchievementName>
      <AchievementDesc>{achievement.description}</AchievementDesc>
      <AchievementGame>{achievement.game_name}</AchievementGame>
    </AchievementInfo>
  );

  return (
    <CardContainerOuter>
      <BlackToolTip title={achievementInfo}>
        <AchivementImageContainer
          image={achievement.icon}
        ></AchivementImageContainer>
      </BlackToolTip>
    </CardContainerOuter>
  );
}
