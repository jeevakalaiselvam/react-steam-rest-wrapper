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

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
  scrollbar-width: thin;
  align-items: flex-start;
  padding-bottom: 1rem;

  @media only screen and (max-width: 840px) {
    padding-bottom: 3rem;
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
  cursor: pointer;
  margin: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(10, 17, 25, 0.8);
`;

const TrophyCount = styled.div`
  display: flex;
  padding: 0.5rem;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const TrophyCountContainer = styled.div`
  display: flex;
  margin-top: 0.5rem;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

const Length = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-left: 0.5rem;
  justify-content: center;
`;

const Date = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-left: 0.5rem;
  justify-content: center;
`;

const NoData = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  color: #959da6;
  justify-content: center;
`;

const Icon = styled.div`
  display: flex;
  color: #55aece;
  font-size: 1.5rem;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

const Zero = styled.div`
  color: #333;
`;

const NotZero = styled.div`
  color: #f5f5f5;
`;

export default function HistoryContent(props) {
  const achievements = props.achievements;
  const yearProp = props.year;

  const allDatesInYear = getDatesBetweenDates(yearProp).reverse();
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
            <BlackToolTip
              key={date.toString()}
              content={
                <TrophyCount>
                  <Date>{getDescForDate(date)}</Date>
                  {achievementsForDate[date] && (
                    <TrophyCountContainer>
                      <Icon>
                        <FaTrophy />
                      </Icon>
                      <Length>{achievementsForDate[date].length}</Length>
                    </TrophyCountContainer>
                  )}
                  {!achievementsForDate[date] && (
                    <NoData>No Achievements</NoData>
                  )}
                </TrophyCount>
              }
            >
              <DateBox
                key={date.toString()}
                onClick={() => {
                  props.showAchievementsForDate(date);
                }}
              >
                {achievementsForDate[date] && (
                  <NotZero>{achievementsForDate[date].length}</NotZero>
                )}
                {!achievementsForDate[date] && <Zero></Zero>}
              </DateBox>
            </BlackToolTip>
          );
        })}
      </AchievementsContainer>
    </ContentContainer>
  );
}
