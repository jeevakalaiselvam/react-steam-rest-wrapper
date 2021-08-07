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
`;

const YearContainer = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;

  flex-direction: column;
`;

export default function History() {
  const { games } = useContext(GamesContext);

  const rightMenuItem = <>TO CALCULATE</>;

  //Sort all achievements and put them in a object containing year mapped to array of all achievements unlocked that year
  const allAchievementsSortedByYear = getAllUnlockedAchievementsSortedByYear(
    getRecentlyUnlockedAllAchievements(games)
  );
  console.log(allAchievementsSortedByYear);

  return (
    <>
      <Page title='History' rightMenuItem={rightMenuItem} showRightMenu={true}>
        <PageContainer>
          <PageContainerInner>
            {/* {Object.keys(allAchievementsSortedByYear)
              .sort((year1, year2) => {
                return year2 - year1;
              })
              .map((year) => {
                const allAchievements = allAchievementsSortedByYear[year];
                const allDatesInAYear = getDateArray(
                  new Date(`January 1, ${year} 00:00:00`),
                  new Date(`December 31, ${year} 23:59:59`)
                );
                allDatesInAYear.map((date) => {
                  return <DateBlock>{}</DateBlock>;
                });
              })} */}
          </PageContainerInner>
        </PageContainer>
      </Page>
    </>
  );
}
