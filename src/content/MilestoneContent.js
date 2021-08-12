import React from "react";
import styled from "styled-components";
import GameCardNormal from "../components/card/GameCardNormal";
import GameCardMinimal from "../components/card/GameCardMinimal";
import { FaBackward, FaForward } from "react-icons/fa";
import {
  PAGINATION_TOTAL_COUNT,
  STORAGE_HEADER_TOTAL_GAMES,
  _STORAGE_READ,
} from "../helper/storage";
import {
  PAGINATION_ACHIEVEMENTS_PER_PAGE,
  PAGINATION_GAMES_PER_PAGE,
} from "../helper/pagination";
import AchievementMinimal from "../components/card/AchievementMinimal";
import AchievementNormal from "../components/card/AchievementNormal";
import MilestoneNormal from "../components/card/MilestoneNormal";

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: space-between;
  flex-direction: column;
  overflow: scroll;
  scrollbar-width: thin;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-bottom: 0rem;

  @media only screen and (max-width: 840px) {
    padding-bottom: 3rem;
  }
`;

const ContainerInner = styled.div`
  display: flex;
  width: 100%;
  justify-self: flex-start;
  justify-content: center;
  overflow: scroll;
  flex-wrap: wrap;
`;

export default function MilestoneContent(props) {
  const achievements = props.achievements;

  return (
    <ContentContainer>
      <ContainerInner>
        {achievements.map((achievement, index) => {
          return (
            <MilestoneNormal
              achievement={achievement}
              index={index}
              total={achievements.length}
              key={achievement.game_id + achievement.id}
            />
          );
        })}
      </ContainerInner>
    </ContentContainer>
  );
}
