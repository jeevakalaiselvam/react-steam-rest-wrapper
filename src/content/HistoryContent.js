import React from "react";
import styled from "styled-components";
import GameCardNormal from "../components/card/GameCardNormal";
import GameCardMinimal from "../components/card/GameCardMinimal";
import { FaBackward, FaForward } from "react-icons/fa";
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
  recent10Years,
  transformAchievementsToDate,
} from "../helper/other";

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
  scrollbar-width: thin;
  align-items: flex-start;
  padding-bottom: 1rem;

  @media only screen and (max-width: 840px) {
    padding-bottom: 0rem;
  }
`;

const ContainerInner = styled.div`
  display: flex;
  width: 100%;
  justify-self: flex-start;
  justify-content: flex-start;
  overflow: scroll;
  height: 100vh;
  flex-direction: column;
  flex-wrap: wrap;
`;

const YearContainer = styled.div`
  padding: 1rem;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 840px) {
    display: none;
  }
`;

const AchievementsContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  width: 100%;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const YearSelect = styled.select`
  width: 200px;
  background-color: rgba(10, 17, 25, 0.6);
  outline: none;
  padding: 0.5rem;
  border: none;
  color: #fefefe;
  justify-self: flex-end;
`;

const DateBox = styled.div`
  width: 30px;
  height: 30px;
  margin: 0.25rem;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(10, 17, 25, 0.8);
`;

export default function HistoryContent(props) {
  const achievements = props.achievements;
  const yearProp = props.year;

  const allDatesInYear = getDatesBetweenDates(yearProp);
  const achievementsForDate = transformAchievementsToDate(
    achievements,
    allDatesInYear
  );
  return (
    <ContentContainer>
      <YearContainer>
        <YearSelect
          onChange={(e) => {
            props.yearChangedHandler(e.target.value);
          }}
          defaultValue={yearProp}
        >
          {recent10Years().map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </YearSelect>
      </YearContainer>
      <AchievementsContainer>
        {allDatesInYear.map((date) => {
          return (
            <DateBox key={date.toString()}>
              {achievementsForDate[date] && achievementsForDate[date].length}
              {!achievementsForDate[date] && "0"}
            </DateBox>
          );
        })}
      </AchievementsContainer>
    </ContentContainer>
  );
}
