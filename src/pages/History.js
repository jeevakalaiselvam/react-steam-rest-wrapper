import React, { useContext } from "react";

import Page from "../components/pages/Page";
import styled from "styled-components";
import { GamesContext } from "../context/GameContext";
import {
  getAllUnlockedAchievements,
  getAllUnlockedAchievementsSortedByYear,
  getRecentlyUnlockedAllAchievements,
  getTotalDatesInUnlocked,
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

export default function History() {
  const { games } = useContext(GamesContext);

  const allUnlockDates = getTotalDatesInUnlocked(
    getRecentlyUnlockedAllAchievements(games)
  );

  return (
    <>
      <Page title='History' rightMenuItem={<></>} showRightMenu={true}>
        <PageContainer>
          <PageContainerInner>
            {/* {["2021", "2020", "2019"].forEach((year) => {
              return (
                <>
                  <DateTitle>{year}</DateTitle>
                  <AllDatesContainer>
                    {Object.keys(allUnlockDates).map((unlockPresentDate) => {
                      if (unlockPresentDate.includes(year))
                        return (
                          <DateBlock>
                            {allUnlockDates[unlockPresentDate]}
                          </DateBlock>
                        );
                    })}
                  </AllDatesContainer>
                </>
              );
            })} */}

            {console.log(
              getAllUnlockedAchievementsSortedByYear(
                getAllUnlockedAchievements(games)
              )
            )}
          </PageContainerInner>
        </PageContainer>
      </Page>
    </>
  );
}
