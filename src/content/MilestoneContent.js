import React from "react";
import styled from "styled-components";
import GameCardNormal from "../components/card/GameCardNormal";
import GameCardMinimal from "../components/card/GameCardMinimal";
import { FaBackward, FaForward, FaTrophy } from "react-icons/fa";
import {
  HISTORY_PAGE_YEAR_SELECTED,
  PAGINATION_TOTAL_COUNT,
  STORAGE_HEADER_TOTAL_GAMES,
  _STORAGE_READ,
  _STORAGE_WRITE,
} from "../helper/storage";
import {
  PAGINATION_ACHIEVEMENTS_PER_PAGE,
  PAGINATION_GAMES_PER_PAGE,
} from "../helper/pagination";
import AchievementMinimal from "../components/card/AchievementMinimal";
import AchievementNormal from "../components/card/AchievementNormal";
import {
  generateDatesInAYear,
  getDatesBetweenDates,
  getDescForDate,
  recent10Years,
  transformAchievementsToDate,
} from "../helper/other";
import BlackToolTip from "../components/other/BlackToolTip";
import { Tooltip } from "@material-ui/core/Tooltip";
import MilestoneRow from "../components/card/MilestoneRow";

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
  scrollbar-width: thin;
  align-items: flex-start;
  padding-bottom: 1rem;
  max-height: 100vh;
  overflow: scroll;

  @media only screen and (max-width: 840px) {
    padding-bottom: 3rem;
  }
`;

export default function MilestoneContent(props) {
  const achievements = props.achievements;

  return (
    <ContentContainer>
      {achievements.map((achievement, index) => {
        return (
          <MilestoneRow
            achievement={achievement}
            milestone={index}
            total={achievements.length}
          ></MilestoneRow>
        );
      })}
    </ContentContainer>
  );
}
