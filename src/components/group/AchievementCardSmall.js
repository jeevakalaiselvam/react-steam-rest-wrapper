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
  box-shadow: 1px 1px 1px hsl(0deg 0% 100% / 10%);
  display: flex;
  flex-direction: column;
  border: 0.5px solid rgba(10, 17, 25, 0.3);

  &:hover {
    border: 0.5px solidrgba(10, 17, 25, 0.9);
  }
`;

const AchivementImageContainer = styled.div`
  width: 100%;
  background-size: cover;
  height: 100%;
  border-radius: 2px;
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
