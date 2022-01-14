import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  FaBackward,
  FaClock,
  FaCross,
  FaForward,
  FaTimes,
} from "react-icons/fa";
import ReactPlayer from "react-player";
import {
  PAGINATION_TOTAL_COUNT,
  _STORAGE_READ,
  _STORAGE_WRITE,
} from "../helper/storage";
import { PAGINATION_ACHIEVEMENTS_PER_PAGE } from "../helper/pagination";
import {
  getAchievementsFilteredByCategory,
  getAchievementsFilteredByPhase,
} from "../helper/games";
import AchievementJournal from "../components/card/AchievementJournal";
import AchievementPhase from "../components/card/AchievementPhase";

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
  width: ${(props) => (props.open ? "100%" : "100%")};
  min-height: 100vh;
`;

const MainJournalOuterContainer = styled.div`
  display: ${(props) => (props.open ? "flex" : "none")};
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  background-color: rgba(10, 17, 25, 0.8);
  top: 0;
  z-index: 10000000000000;
`;

const JournalContainer = styled.div`
  display: flex;
  width: 30vw;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-height: 80vh;
  flex-direction: column;
  scrollbar-width: thin; /* "auto" or "thin" */
  scrollbar-color: black gray;
`;

const JournalInnerContainer = styled.div`
  display: "flex";
  height: 100%;
  overflow: scroll;
  flex-direction: column;
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
  padding: 0.5rem;
  height: 100vh;
  overflow: scroll;
  scrollbar-width: none;
  scrollbar-color: black gray;
`;

const CloseButton = styled.div`
  padding: 1rem;
  display: flex;
  font-size: 2rem;
  align-items: center;
  cursor: pointer;
  justify-content: flex-end;
`;

const VideoContainer = styled.div`
  display: ${(props) => (props.visible ? "flex" : "none")};
`;

const SectionSearchInput = styled.div`
  width: 100%;
  padding: 0.5rem;
  margin-left: 0.5rem;

  & > input {
    background-color: #222730;
    outline: none;
    border: none;
    color: #b8b9bd;
    width: 100%;
    padding: 0.25rem 0.5rem;
  }
`;

export default function PlannerContent(props) {
  const achievements = props.achievements;
  // const filteredAchievements = filterAchievementsByType(
  //   achievements,
  //   _STORAGE_READ(SELECTED_GAME)
  // );
  const [filteredAchievements, setFilteredAchievements] = useState(
    props.achievements
  );

  const [refresh, setRefresh] = useState(true);
  const [journalData, setJournalData] = useState("No Entry Found!");
  const [journalVideoData, setJournalVideoData] = useState(
    "No Video Link Found!"
  );
  const [achievementSelected, setAchievementSelected] = useState(
    filteredAchievements.length != 0 && filteredAchievements[0]
  );

  const refreshAchievementList = () => {};

  const achievementSelectedHandler = (achievement) => {
    setAchievementSelected((old) => achievement);
  };

  useEffect(() => {
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
    none: noneAllAchievements,
    phase1: phase1AllAchievements,
    phase2: phase2AllAchievements,
    phase3: phase3AllAchievements,
    phase4: phase4AllAchievements,
  } = getAchievementsFilteredByPhase(filteredAchievements);

  const [noneAchievements, setNoneAchievements] = useState(noneAllAchievements);
  const [phase1Achievements, setphase1Achievements] = useState(
    phase1AllAchievements
  );
  const [phase2Achievements, setphase2Achievements] = useState(
    phase2AllAchievements
  );
  const [phase3Achievements, setphase3Achievements] = useState(
    phase3AllAchievements
  );
  const [phase4Achievements, setphase4Achievements] = useState(
    phase4AllAchievements
  );

  const noneSearchChange = (e) => {
    setNoneAchievements((old) => {
      let newAchievements = [];
      newAchievements = noneAllAchievements.filter((achievement) => {
        return achievement.name
          .toLowerCase()
          .trim()
          .includes(e.target.value.toLowerCase().trim());
      });
      return newAchievements;
    });
  };

  const phase1SearchChange = (e) => {
    setphase1Achievements((old) => {
      let newAchievements = [];
      newAchievements = phase1AllAchievements.filter((achievement) => {
        return achievement.name
          .toLowerCase()
          .trim()
          .includes(e.target.value.toLowerCase().trim());
      });
      return newAchievements;
    });
  };
  const phase2SearchChange = (e) => {
    setphase2Achievements((old) => {
      let newAchievements = [];
      newAchievements = phase2AllAchievements.filter((achievement) => {
        return achievement.name
          .toLowerCase()
          .trim()
          .includes(e.target.value.toLowerCase().trim());
      });
      return newAchievements;
    });
  };
  const phase3SearchChange = (e) => {
    setphase3Achievements((old) => {
      let newAchievements = [];
      newAchievements = phase3AllAchievements.filter((achievement) => {
        return achievement.name
          .toLowerCase()
          .trim()
          .includes(e.target.value.toLowerCase().trim());
      });
      return newAchievements;
    });
  };
  const phase4SearchChange = (e) => {
    setphase4Achievements((old) => {
      let newAchievements = [];
      newAchievements = phase4AllAchievements.filter((achievement) => {
        return achievement.name
          .toLowerCase()
          .trim()
          .includes(e.target.value.toLowerCase().trim());
      });
      return newAchievements;
    });
  };

  const refreshViewWithoutFetch = () => {
    setRefresh((old) => !refresh);
    props.updatePinnedCount();
    const {
      none: noneAllAchievements,
      phase1: phase1AllAchievements,
      phase2: phase2AllAchievements,
      phase3: phase3AllAchievements,
      phase4: phase4AllAchievements,
    } = getAchievementsFilteredByPhase(filteredAchievements);
    setNoneAchievements((old) => noneAllAchievements);
    setphase1Achievements((old) => phase1AllAchievements);
    setphase2Achievements((old) => phase2AllAchievements);
    setphase3Achievements((old) => phase3AllAchievements);
    setphase4Achievements((old) => phase4AllAchievements);
  };

  return (
    <MainContainer>
      <ContentContainer open={props.journalOpen}>
        <ContainerInner>
          <SectionContainer empty={noneAllAchievements.length === 0}>
            <SectionTitle>All</SectionTitle>
            <SectionSearchInput>
              <input
                type="text"
                onChange={noneSearchChange}
                placeholder="Search.."
              />
            </SectionSearchInput>
            <AchievementContainer>
              {noneAchievements.map((achievement) => {
                return (
                  <AchievementPhase
                    refreshViewWithoutFetch={refreshViewWithoutFetch}
                    achievement={achievement}
                    achievementSelected={achievementSelected}
                    key={achievement.game_id + achievement.id}
                    achievementSelectedHandler={achievementSelectedHandler}
                    openJournal={props.openJournal}
                  />
                );
              })}
            </AchievementContainer>
          </SectionContainer>
          <SectionContainer empty={false}>
            <SectionTitle>Phase 1</SectionTitle>
            <SectionSearchInput>
              <input
                type="text"
                onChange={phase1SearchChange}
                placeholder="Search.."
              />
            </SectionSearchInput>
            <AchievementContainer>
              {phase1Achievements.map((achievement) => {
                return (
                  <AchievementPhase
                    refreshViewWithoutFetch={refreshViewWithoutFetch}
                    achievement={achievement}
                    achievementSelected={achievementSelected}
                    key={achievement.game_id + achievement.id}
                    achievementSelectedHandler={achievementSelectedHandler}
                    openJournal={props.openJournal}
                  />
                );
              })}
            </AchievementContainer>
          </SectionContainer>
          <SectionContainer empty={false}>
            <SectionTitle>Phase 2</SectionTitle>
            <SectionSearchInput>
              <input
                type="text"
                onChange={phase2SearchChange}
                placeholder="Search.."
              />
            </SectionSearchInput>
            <AchievementContainer>
              {phase2Achievements.map((achievement) => {
                return (
                  <AchievementPhase
                    refreshViewWithoutFetch={refreshViewWithoutFetch}
                    achievement={achievement}
                    achievementSelected={achievementSelected}
                    key={achievement.game_id + achievement.id}
                    achievementSelectedHandler={achievementSelectedHandler}
                    openJournal={props.openJournal}
                  />
                );
              })}
            </AchievementContainer>
          </SectionContainer>

          <SectionContainer empty={false}>
            <SectionTitle>Phase 3</SectionTitle>
            <SectionSearchInput>
              <input
                type="text"
                onChange={phase3SearchChange}
                placeholder="Search.."
              />
            </SectionSearchInput>
            <AchievementContainer>
              {phase3Achievements.map((achievement) => {
                return (
                  <AchievementPhase
                    refreshViewWithoutFetch={refreshViewWithoutFetch}
                    achievement={achievement}
                    achievementSelected={achievementSelected}
                    key={achievement.game_id + achievement.id}
                    achievementSelectedHandler={achievementSelectedHandler}
                    openJournal={props.openJournal}
                  />
                );
              })}
            </AchievementContainer>
          </SectionContainer>
          <SectionContainer empty={false}>
            <SectionTitle>Phase 4</SectionTitle>
            <SectionSearchInput>
              <input
                type="text"
                onChange={phase4SearchChange}
                placeholder="Search.."
              />
            </SectionSearchInput>
            <AchievementContainer>
              {phase4Achievements.map((achievement) => {
                return (
                  <AchievementPhase
                    refreshViewWithoutFetch={refreshViewWithoutFetch}
                    achievement={achievement}
                    achievementSelected={achievementSelected}
                    key={achievement.game_id + achievement.id}
                    achievementSelectedHandler={achievementSelectedHandler}
                    openJournal={props.openJournal}
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
      <MainJournalOuterContainer
        open={props.journalOpen}
        onClick={() => props.closeJournal()}
      >
        <JournalContainer>
          {/* <CloseButton onClick={() => props.closeJournal()}>
          <FaTimes />
        </CloseButton> */}
          <AchievementJournal
            achievement={achievementSelected}
            refreshViewWithoutFetch={refreshViewWithoutFetch}
          />
          <JournalInnerContainer>
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
          </JournalInnerContainer>
        </JournalContainer>
      </MainJournalOuterContainer>
    </MainContainer>
  );
}