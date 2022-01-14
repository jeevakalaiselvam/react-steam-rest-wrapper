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
import AchievementKanban from "../components/card/AchievementKanban";
import {
  filterAchievementsByType,
  getAchievementsFilteredByCategory,
} from "../helper/games";
import { UNMISSABLE } from "../constants/achievement";
import AchievementJournal from "../components/card/AchievementJournal";

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const ContentContainer = styled.div`
  width: ${(props) => (props.open ? "70%" : "100%")};
  min-height: 100vh;
`;

const JournalContainer = styled.div`
  width: ${(props) => (props.open ? "30%" : "0%")};
  min-height: 100vh;
  overflow: scroll;
  scrollbar-width: thin; /* "auto" or "thin" */
  scrollbar-color: black gray;
`;

const ContainerInner = styled.div`
  display: flex;
  width: 100%;
  justify-self: flex-start;
  justify-content: center;
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
    color: #b8b9bd;
    background-color: #222730;
    padding: 1rem;
    border: none;
    outline: none;
    height: 100vh;
    font-size: 1rem;
  }
`;

const SectionContainer = styled.div`
  height: 98vh;
  display: ${(props) => (props.empty ? "none" : "flex")};
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SectionTitle = styled.div`
  font-size: 1rem;
  height: 2vh;
  text-align: center;
  width: 100%;
  text-transform: capitalize;
`;

const AchievementContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0.25rem;
  height: 100vh;
  overflow: scroll;
  scrollbar-width: none;
  scrollbar-color: black gray;
`;

export default function KanbanContent(props) {
  const achievements = props.achievements;
  // const filteredAchievements = filterAchievementsByType(
  //   achievements,
  //   _STORAGE_READ(SELECTED_GAME)
  // );

  const filteredAchievements = achievements;

  const [refresh, setRefresh] = useState(true);
  const [journalData, setJournalData] = useState("No Entry Found!");
  const [achievementSelected, setAchievementSelected] = useState(
    filteredAchievements.length != 0 && filteredAchievements[0]
  );

  const refreshViewWithoutFetch = () => {
    setRefresh((old) => !refresh);
    props.updatePinnedCount();
  };

  const refreshAchievementList = () => {};

  const achievementSelectedHandler = (achievement) => {
    setAchievementSelected((old) => achievement);
  };

  useEffect(() => {
    console.log("Refreshing");
    setAchievementSelected((old) => ({ ...old }));
  }, [refresh]);

  const journalEntryChanged = (e) => {
    _STORAGE_WRITE(
      `${achievementSelected.game_id}_${achievementSelected.id}_JOURNAL`,
      e.target.value
    );
    setJournalData((old) => e.target.value);
  };

  useEffect(() => {
    setJournalData(
      (old) =>
        _STORAGE_READ(
          `${achievementSelected.game_id}_${achievementSelected.id}_JOURNAL`
        ) || "No Entry Found!"
    );
  }, [achievementSelected]);

  const {
    allCount,
    unTaggedCount,
    unMissableCount,
    missableCount,
    multiplayerCount,
  } = getAchievementsFilteredByCategory(filteredAchievements);

  return (
    <MainContainer>
      <ContentContainer open={props.journalOpen}>
        <ContainerInner>
          <SectionContainer empty={unTaggedCount.length === 0}>
            <SectionTitle>Not Tagged</SectionTitle>
            <AchievementContainer>
              {unTaggedCount.map((achievement) => {
                return (
                  <AchievementKanban
                    refreshViewWithoutFetch={refreshViewWithoutFetch}
                    achievement={achievement}
                    achievementSelected={achievementSelected}
                    key={achievement.game_id + achievement.id}
                    achievementSelectedHandler={achievementSelectedHandler}
                  />
                );
              })}
            </AchievementContainer>
          </SectionContainer>
          <SectionContainer empty={unMissableCount.length === 0}>
            <SectionTitle>Story</SectionTitle>
            <AchievementContainer>
              {unMissableCount.map((achievement) => {
                return (
                  <AchievementKanban
                    refreshViewWithoutFetch={refreshViewWithoutFetch}
                    achievement={achievement}
                    achievementSelected={achievementSelected}
                    key={achievement.game_id + achievement.id}
                    achievementSelectedHandler={achievementSelectedHandler}
                  />
                );
              })}
            </AchievementContainer>
          </SectionContainer>
          <SectionContainer empty={missableCount.length === 0}>
            <SectionTitle>Missable</SectionTitle>
            <AchievementContainer>
              {missableCount.map((achievement) => {
                return (
                  <AchievementKanban
                    refreshViewWithoutFetch={refreshViewWithoutFetch}
                    achievement={achievement}
                    achievementSelected={achievementSelected}
                    key={achievement.game_id + achievement.id}
                    achievementSelectedHandler={achievementSelectedHandler}
                  />
                );
              })}
            </AchievementContainer>
          </SectionContainer>

          <SectionContainer empty={multiplayerCount.length === 0}>
            <SectionTitle>Online</SectionTitle>
            <AchievementContainer>
              {multiplayerCount.map((achievement) => {
                return (
                  <AchievementKanban
                    refreshViewWithoutFetch={refreshViewWithoutFetch}
                    achievement={achievement}
                    achievementSelected={achievementSelected}
                    key={achievement.game_id + achievement.id}
                    achievementSelectedHandler={achievementSelectedHandler}
                  />
                );
              })}
            </AchievementContainer>
          </SectionContainer>
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
      <JournalContainer open={props.journalOpen}>
        <AchievementJournal
          achievement={achievementSelected}
          refreshViewWithoutFetch={refreshViewWithoutFetch}
        />
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
