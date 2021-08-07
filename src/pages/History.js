import React, { useContext } from "react";

import Page from "../components/pages/Page";
import styled from "styled-components";
import { GamesContext } from "../context/GameContext";
import {
  getAllAchievementsSortedAZ,
  getAllUnlockedAchievements,
  getAllUnlockedAchievementsSortedByYear,
  getRecentlyUnlockedAllAchievements,
  getTotalAchievementsInADate,
} from "../actions/achievementActions";
import Card from "../components/core/Card";
import BlackToolTip from "../components/ui/BlackToolTip";
import { FaTrophy } from "react-icons/fa";
import { getFullDate } from "../helper/dateHelper";
import { v4 as uuidv4 } from "uuid";

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: scroll;
  margin: 0 auto;
`;

const PageContainerInner = styled.div`
  width: 100%;
  display: flex;
  overflow: scroll;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const DateTitle = styled.div`
  width: 100%;
  display: flex;
  overflow: scroll;
  flex-direction: row;
  font-size: 1.5rem;
  padding: 1rem;

  flex-wrap: wrap;
  justify-content: center;
`;

const AllDatesContainer = styled.div`
  width: 100%;

  display: flex;
  overflow: scroll;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const DateBlock = styled.div`
  width: 20px;
  background-color: rgba(10, 17, 25, 0.8);
  height: 20px;
  align-items: center;
  display: flex;
  cursor: pointer;
  justify-content: center;
  margin: 5px;
  color: ${(props) => props.color};

  &:hover {
    border: 0.5px solid #fefefe;
  }
`;

const YearContainer = styled.div`
  width: 100%;
  align-items: center;
  color: rgb(85, 174, 206);
  font-size: 1.2rem;
  justify-content: center;
  display: flex;
  cursor: pointer;

  flex-direction: column;
`;

const ToolTipData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TrophyData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const TrophyCount = styled.div`
  margin-left: 0.5rem;
`;

export default function History() {
  const { games } = useContext(GamesContext);

  const rightMenuItem = <>TO CALCULATE</>;

  //Sort all achievements and put them in a object containing year mapped to array of all achievements unlocked that year in that date
  const allAchievementsSortedByYear = getAllUnlockedAchievementsSortedByYear(
    getRecentlyUnlockedAllAchievements(games)
  );
  console.log(allAchievementsSortedByYear);

  return (
    <>
      <Page title='History' rightMenuItem={rightMenuItem} showRightMenu={true}>
        <PageContainer>
          <PageContainerInner>
            {Object.keys(allAchievementsSortedByYear)
              .sort((year1, year2) => {
                return year2 - year1;
              })
              .map((year) => {
                return (
                  <AllDatesContainer>
                    <YearContainer>{year}</YearContainer>
                    {Object.keys(allAchievementsSortedByYear[year])
                      .reverse()
                      .map((date) => {
                        return (
                          <BlackToolTip
                            title={
                              <ToolTipData>
                                {getFullDate(date)}
                                <TrophyData>
                                  <FaTrophy />
                                  <TrophyCount>
                                    {
                                      allAchievementsSortedByYear[year][date]
                                        .length
                                    }
                                  </TrophyCount>
                                </TrophyData>
                              </ToolTipData>
                            }
                          >
                            <DateBlock
                              key={uuidv4()}
                              color={
                                allAchievementsSortedByYear[year][date].length >
                                0
                                  ? "#c5c5c5"
                                  : "#888888"
                              }
                            >
                              {allAchievementsSortedByYear[year][date]
                                .length === 0
                                ? ""
                                : allAchievementsSortedByYear[year][date]
                                    .length}
                            </DateBlock>
                          </BlackToolTip>
                        );
                      })}
                  </AllDatesContainer>
                );
              })}
          </PageContainerInner>
        </PageContainer>
      </Page>
    </>
  );
}
