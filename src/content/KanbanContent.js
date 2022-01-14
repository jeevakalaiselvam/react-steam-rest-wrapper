import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaBackward, FaForward } from "react-icons/fa";
import ReactPlayer from "react-player";
import {
  PAGINATION_TOTAL_COUNT,
  _STORAGE_READ,
  _STORAGE_WRITE,
} from "../helper/storage";
import { PAGINATION_ACHIEVEMENTS_PER_PAGE } from "../helper/pagination";
import AchievementKanban from "../components/card/AchievementKanban";
import { getAchievementsFilteredByCategory } from "../helper/games";
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
    height: 95vh;
    font-size: 1rem;
  }
`;

const VideoInput = styled.div`
  & > textarea {
    width: 100%;
    color: #b8b9bd;
    background-color: #222730;
    padding: 1rem;
    border: none;
    outline: none;
    height: 5vh;
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

const VideoContainer = styled.div`
  display: ${(props) => (props.visible ? "flex" : "none")};
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
  const [journalVideoData, setJournalVideoData] = useState(
    "No Video Link Found!"
  );
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

  const journalVideoChanged = (e) => {
    _STORAGE_WRITE(
      `${achievementSelected.game_id}_${achievementSelected.id}_JOURNAL_VIDEO`,
      e.target.value
    );
    setJournalVideoData((old) => e.target.value);
  };

  useEffect(() => {
    setJournalData(
      (old) =>
        _STORAGE_READ(
          `${achievementSelected.game_id}_${achievementSelected.id}_JOURNAL`
        ) || "No Entry Found!"
    );
    setJournalVideoData(
      (old) =>
        _STORAGE_READ(
          `${achievementSelected.game_id}_${achievementSelected.id}_JOURNAL_VIDEO`
        ) || "No Entry Found!"
    );
  }, [achievementSelected]);

  function validURL(str) {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  }

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
          <SectionContainer empty={false}>
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
          <SectionContainer empty={false}>
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

          <SectionContainer empty={false}>
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
        <VideoContainer visible={validURL(journalVideoData)}>
          <ReactPlayer url={journalVideoData} controls />
        </VideoContainer>
        <VideoInput>
          <textarea
            spellCheck={false}
            value={journalVideoData}
            onChange={journalVideoChanged}
          />
        </VideoInput>
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
