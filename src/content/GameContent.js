import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaBackward, FaForward } from "react-icons/fa";
import {
  ACHIEVEMENTGAMEPAGE_FILTER,
  PAGINATION_TOTAL_COUNT,
  SELECTED_GAME,
  _STORAGE_READ,
  _STORAGE_WRITE,
} from "../helper/storage";
import { PAGINATION_ACHIEVEMENTS_PER_PAGE } from "../helper/pagination";
import AchievementMinimal from "../components/card/AchievementMinimal";
import AchievementNormal from "../components/card/AchievementNormal";
import { filterAchievementsByType } from "../helper/games";
import { UNMISSABLE } from "../constants/achievement";

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: space-between;
  flex-direction: column;
  overflow: scroll;
  scrollbar-width: thin;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-bottom: 1rem;

  @media only screen and (max-width: 840px) {
    padding-bottom: 3rem;
  }
`;

const ContentContainer = styled.div`
  width: 70%;
  min-height: 100vh;
`;

const JournalContainer = styled.div`
  width: 30%;
  min-height: 100vh;
`;

const ContainerInner = styled.div`
  display: flex;
  width: 100%;
  justify-self: flex-start;
  justify-content: center;
  overflow: scroll;
  flex-wrap: wrap;
  padding-bottom: 1.5rem;
`;

const Pagination = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: fixed;
  background-color: rgba(10, 17, 25, 1);
  padding: 0.25rem 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
`;

const Page = styled.div`
  background-image: url("./images/bgcard.png");
  padding: 0.25rem 0.75rem;
  cursor: pointer;
  margin: 0 1rem;
  border: 1px solid #ffffff00;
  &:hover {
    color: #f5f5f5;
    border: 1px solid #f5f5f5;
  }
`;
const PageCount = styled.div`
  padding: 0.25rem 0.75rem;
`;

const JournalInput = styled.div`
  & > textarea {
    width: 100%;
    color: #bbbbbb;
    background-color: rgba(10, 17, 25, 1);
    padding: 1rem;
    border: none;
    outline: none;
    height: 100vh;
    font-size: 0.9rem;
  }
`;

export default function GameContent(props) {
  const achievements = props.achievements;
  const filteredAchievements = filterAchievementsByType(
    achievements,
    _STORAGE_READ(SELECTED_GAME)
  );

  const [refresh, setRefresh] = useState(true);
  const [journalData, setJournalData] = useState("No Entry Found!");
  const [achievementSelected, setAchievementSelected] = useState(0);

  const refreshViewWithoutFetch = () => {
    setRefresh((old) => !refresh);
    props.updatePinnedCount();
  };

  const achievementSelectedHandler = (achievementStorageJournalKey) => {
    setAchievementSelected((old) => achievementStorageJournalKey);
  };

  const journalEntryChanged = (e) => {
    _STORAGE_WRITE(`${achievementSelected}_JOURNAL`, e.target.value);
    setJournalData((old) => e.target.value);
  };

  useEffect(() => {
    setJournalData(
      (old) =>
        _STORAGE_READ(`${achievementSelected}_JOURNAL`) || "No Entry Found!"
    );
  }, [achievementSelected]);

  return (
    <MainContainer>
      <ContentContainer>
        <ContainerInner>
          {filteredAchievements.map((achievement) => {
            return props.viewType === 0 ? (
              <AchievementMinimal
                achievement={achievement}
                key={achievement.game_id + achievement.id}
                refreshViewWithoutFetch={refreshViewWithoutFetch}
              />
            ) : (
              <AchievementNormal
                refreshViewWithoutFetch={refreshViewWithoutFetch}
                achievement={achievement}
                key={achievement.game_id + achievement.id}
                achievementSelectedHandler={achievementSelectedHandler}
              />
            );
          })}
        </ContainerInner>
        <Pagination>
          <Page onClick={props.moveToPageLeft}>
            <FaBackward />
          </Page>
          <PageCount>
            {props.page} /{" "}
            {Math.ceil(
              _STORAGE_READ(PAGINATION_TOTAL_COUNT) /
                PAGINATION_ACHIEVEMENTS_PER_PAGE
            )}
          </PageCount>
          <Page onClick={props.moveToPageRight}>
            <FaForward />
          </Page>
        </Pagination>
      </ContentContainer>
      <JournalContainer>
        <JournalInput>
          <textarea
            spellCheck={false}
            value={journalData}
            onChange={journalEntryChanged}
          />
        </JournalInput>
      </JournalContainer>
    </MainContainer>
  );
}
