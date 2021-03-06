import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  FaBackward,
  FaClock,
  FaCross,
  FaForward,
  FaSteam,
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
  getXPSumForAchievements,
} from "../helper/games";
import AchievementJournal from "../components/card/AchievementJournal";
import AchievementPhase from "../components/card/AchievementPhase";
import { getAchievementsUnlockedAfterRefresh } from "../helper/other";

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
  width: ${(props) => (props.videoVisible ? "90vw" : "50vw")};
  position: fixed;
  left: 50%;
  background-color: rgba(10, 17, 20, 1);
  top: 50%;
  transform: translate(-50%, -50%);
  max-height: 80vh;
  min-height: 80vh;
  flex-direction: row;
  scrollbar-width: none; /* "auto" or "thin" */

  scrollbar-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
`;

const VideoInnerContainer = styled.div`
  display: flex;
  flex: 2;
  padding: 1rem 0.25rem;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const JournalInnerContainer = styled.div`
  display: "flex";
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0.25rem;
  scrollbar-width: none; /* "auto" or "thin" */

  scrollbar-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
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
  flex: 1;
  height: 84%;
  & > textarea {
    width: 100%;
    color: #b8b9bd;
    background-color: #222730;
    padding: 1rem;
    border: none;
    outline: none;
    height: 100%;
    font-size: 1rem;
    flex-direction: row;
    scrollbar-width: none; /* "auto" or "thin" */

    scrollbar-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
  }
`;

const VideoInput = styled.div`
  width: 100%;

  & > input {
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
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  text-transform: capitalize;
`;
const InnerTitle = styled.div`
  font-size: 1rem;
  height: 2vh;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  margin-right: 1rem;
  width: 100%;
  text-transform: capitalize;
`;
const InnerIcon = styled.div`
  font-size: 1rem;
  height: 2vh;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  width: 100%;
  color: #55aece;
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
  scrollbar-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
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
  display: "flex";
  width: 100%;
  flex: 1;
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

const RecentHistoryContainer = styled.div`
  display: ${(props) => (props.visible ? "flex" : "none")};
  top: 0;
  z-index: 1000000000000;
  left: 0;
  position: fixed;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background: rgba(14, 22, 31, 0.85);
`;

const RecentHistory = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 40vw;
  height: 80vh;
`;

const RecentHistoryTitle = styled.div`
  display: flex;
  width: 100%;
  color: #55aece;
  padding: 0.5rem 1rem;
  border-width: 2px 2px 0px 2px;
  border-color: rgba(7, 13, 17, 0);
  border-style: solid;
  font-size: 1.1rem;
  align-items: center;
  justify-content: center;
`;

const RecentHistoryContent = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  scrollbar-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
  flex-direction: column;
  flex: 1;
  border-width: 0px 2px 2px 2px;
  border-color: rgba(7, 13, 17, 0);
  border-style: solid;
  overflow: scroll;
  justify-content: flex-start;
  scrollbar-width: none; /* "auto" or "thin" */
  scrollbar-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
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

  console.log("ALL ACHIEVEMENTS", filteredAchievements);
  const recentlyUnlockedAfterRefresh =
    getAchievementsUnlockedAfterRefresh(filteredAchievements);
  console.log("RECENTLY UNLOCKED", recentlyUnlockedAfterRefresh);

  const [refresh, setRefresh] = useState(true);
  const [journalData, setJournalData] = useState("No Entry Found!");
  const [journalVideoData, setJournalVideoData] = useState(
    "No Video Link Found!"
  );
  const [achievementSelected, setAchievementSelected] = useState(null);

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
    if (achievementSelected !== null) {
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
    }
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
    unlockedAll: unlockedAchievements,
    unlockedToday: unlockedTodayAchievements,
    unlockedWeek: unlockedWeekAchievements,
    lockedAll: lockedAllAchievements,
  } = getAchievementsFilteredByPhase(filteredAchievements);
  console.log(filteredAchievements);

  const [allAchievements, setAllAchievements] = useState(filteredAchievements);
  const [noneAchievements, setNoneAchievements] = useState(noneAllAchievements);
  const [lockedAchievements, setLockedAchievements] = useState(
    lockedAllAchievements
  );
  const [untaggedActive, setUntaggedActive] = useState(true);
  const [unlockedActive, setUnlockedActive] = useState(true);
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
    unlockedTodayAchievements
  );

  const noneSearchChange = (e) => {
    setNoneAchievements((old) => {
      let newAchievements = [];
      newAchievements = noneAllAchievements.filter((achievement) => {
        return (
          achievement.name
            .toLowerCase()
            .trim()
            .includes(e.target.value.toLowerCase().trim()) ||
          achievement.description
            .toLowerCase()
            .trim()
            .includes(e.target.value.toLowerCase().trim()) ||
          (
            _STORAGE_READ(`${achievement.game_id}_${achievement.id}_JOURNAL`) ||
            ""
          )
            .toLowerCase()
            .trim()
            .includes(e.target.value.toLowerCase().trim())
        );
      });
      return newAchievements;
    });
  };

  const lockedSearchChange = (e) => {
    setLockedAchievements((old) => {
      let newAchievements = [];
      newAchievements = lockedAllAchievements.filter((achievement) => {
        return (
          achievement.name
            .toLowerCase()
            .trim()
            .includes(e.target.value.toLowerCase().trim()) ||
          achievement.description
            .toLowerCase()
            .trim()
            .includes(e.target.value.toLowerCase().trim()) ||
          (
            _STORAGE_READ(`${achievement.game_id}_${achievement.id}_JOURNAL`) ||
            ""
          )
            .toLowerCase()
            .trim()
            .includes(e.target.value.toLowerCase().trim())
        );
      });
      return newAchievements;
    });
  };

  const phase1SearchChange = (e) => {
    setphase1Achievements((old) => {
      let newAchievements = [];
      newAchievements = phase1Achievements.filter((achievement) => {
        return (
          achievement.name
            .toLowerCase()
            .trim()
            .includes(e.target.value.toLowerCase().trim()) ||
          achievement.description
            .toLowerCase()
            .trim()
            .includes(e.target.value.toLowerCase().trim()) ||
          (
            _STORAGE_READ(`${achievement.game_id}_${achievement.id}_JOURNAL`) ||
            ""
          )
            .toLowerCase()
            .trim()
            .includes(e.target.value.toLowerCase().trim())
        );
      });
      return newAchievements;
    });
  };
  const phase2SearchChange = (e) => {
    setphase2Achievements((old) => {
      let newAchievements = [];
      newAchievements = phase2AllAchievements.filter((achievement) => {
        return (
          achievement.name
            .toLowerCase()
            .trim()
            .includes(e.target.value.toLowerCase().trim()) ||
          achievement.description
            .toLowerCase()
            .trim()
            .includes(e.target.value.toLowerCase().trim()) ||
          (
            _STORAGE_READ(`${achievement.game_id}_${achievement.id}_JOURNAL`) ||
            ""
          )
            .toLowerCase()
            .trim()
            .includes(e.target.value.toLowerCase().trim())
        );
      });
      return newAchievements;
    });
  };
  const phase3SearchChange = (e) => {
    setphase3Achievements((old) => {
      let newAchievements = [];
      newAchievements = phase3AllAchievements.filter((achievement) => {
        return (
          achievement.name
            .toLowerCase()
            .trim()
            .includes(e.target.value.toLowerCase().trim()) ||
          achievement.description
            .toLowerCase()
            .trim()
            .includes(e.target.value.toLowerCase().trim()) ||
          (
            _STORAGE_READ(`${achievement.game_id}_${achievement.id}_JOURNAL`) ||
            ""
          )
            .toLowerCase()
            .trim()
            .includes(e.target.value.toLowerCase().trim())
        );
      });
      return newAchievements;
    });
  };
  const phase4SearchChange = (e) => {
    setphase4Achievements((old) => {
      let newAchievements = [];
      newAchievements = phase4AllAchievements.filter((achievement) => {
        return (
          achievement.name
            .toLowerCase()
            .trim()
            .includes(e.target.value.toLowerCase().trim()) ||
          achievement.description
            .toLowerCase()
            .trim()
            .includes(e.target.value.toLowerCase().trim()) ||
          (
            _STORAGE_READ(`${achievement.game_id}_${achievement.id}_JOURNAL`) ||
            ""
          )
            .toLowerCase()
            .trim()
            .includes(e.target.value.toLowerCase().trim())
        );
      });
      return newAchievements;
    });
  };

  const allSearchChange = (e) => {
    setAllAchievements((old) => {
      let newAchievements = [];
      newAchievements = filteredAchievements.filter((achievement) => {
        return (
          achievement.name
            .toLowerCase()
            .trim()
            .includes(e.target.value.toLowerCase().trim()) ||
          achievement.description
            .toLowerCase()
            .trim()
            .includes(e.target.value.toLowerCase().trim()) ||
          (
            _STORAGE_READ(`${achievement.game_id}_${achievement.id}_JOURNAL`) ||
            ""
          )
            .toLowerCase()
            .trim()
            .includes(e.target.value.toLowerCase().trim())
        );
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
      unlockedAll: unlockedAchievements,
      unlockedWeek: unlockedWeekAchievements,
      unlockedToday: unlockedTodayAchievements,
    } = getAchievementsFilteredByPhase(filteredAchievements);
    setNoneAchievements((old) => noneAllAchievements);
    setphase1Achievements((old) => phase1AllAchievements);
    setphase2Achievements((old) => phase2AllAchievements);
    setphase3Achievements((old) => phase3AllAchievements);
    setphase4Achievements((old) => unlockedTodayAchievements);
  };

  const [showHistory, setShowHistory] = useState(
    recentlyUnlockedAfterRefresh.length !== 0
  );

  return (
    <MainContainer>
      <RecentHistoryContainer
        onClick={() => {
          _STORAGE_WRITE("LAST_REFRESH_TIME", new Date().getTime());
          setShowHistory((old) => false);
        }}
        visible={showHistory}
      >
        <RecentHistory>
          <RecentHistoryTitle>Recently Unlocked</RecentHistoryTitle>
          <RecentHistoryContent>
            {recentlyUnlockedAfterRefresh.map((achievement) => {
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
          </RecentHistoryContent>
        </RecentHistory>
      </RecentHistoryContainer>
      <ContentContainer open={props.journalOpen}>
        <ContainerInner>
          <SectionContainer empty={false}>
            <SectionTitle onClick={() => setUntaggedActive((old) => !old)}>
              <InnerTitle>{untaggedActive ? "Backlog" : "Untagged"}</InnerTitle>
              <InnerIcon>
                <FaSteam style={{ marginRight: "0.5rem" }} />
                {untaggedActive
                  ? `${getXPSumForAchievements(lockedAchievements)} XP`
                  : `${getXPSumForAchievements(noneAchievements)} XP`}
              </InnerIcon>
            </SectionTitle>
            <SectionSearchInput>
              <input
                type="text"
                onChange={
                  !untaggedActive ? noneSearchChange : lockedSearchChange
                }
                placeholder="Search.."
              />
            </SectionSearchInput>
            <AchievementContainer>
              {!untaggedActive &&
                noneAchievements.map((achievement) => {
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
              {untaggedActive &&
                lockedAchievements.map((achievement) => {
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
            <SectionTitle>
              <InnerTitle>{`Phase 1`}</InnerTitle>
              <InnerIcon>
                <FaSteam style={{ marginRight: "0.5rem" }} />
                {`${getXPSumForAchievements(phase1Achievements)} XP`}
              </InnerIcon>
            </SectionTitle>
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
            <SectionTitle>
              <InnerTitle>{`Phase 2`}</InnerTitle>
              <InnerIcon>
                <FaSteam style={{ marginRight: "0.5rem" }} />
                {`${getXPSumForAchievements(phase2Achievements)} XP`}
              </InnerIcon>
            </SectionTitle>
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
            <SectionTitle>
              <InnerTitle>{`Phase 3`}</InnerTitle>
              <InnerIcon>
                <FaSteam style={{ marginRight: "0.5rem" }} />
                {`${getXPSumForAchievements(phase3Achievements)} XP`}
              </InnerIcon>
            </SectionTitle>
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
            <SectionTitle onClick={() => setUnlockedActive((old) => !old)}>
              <InnerTitle>{unlockedActive ? `Today` : `Week`}</InnerTitle>
              <InnerIcon>
                <FaSteam style={{ marginRight: "0.5rem" }} />
                {unlockedActive
                  ? `${getXPSumForAchievements(phase4Achievements)} XP`
                  : `${getXPSumForAchievements(unlockedWeekAchievements)} XP`}
              </InnerIcon>
            </SectionTitle>
            <SectionSearchInput>
              <input
                type="text"
                onChange={unlockedActive ? phase4SearchChange : allSearchChange}
                placeholder="Search.."
              />
            </SectionSearchInput>
            <AchievementContainer>
              {unlockedActive &&
                phase4Achievements.map((achievement) => {
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
              {!unlockedActive &&
                unlockedWeekAchievements.map((achievement) => {
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
      {achievementSelected != null && (
        <MainJournalOuterContainer
          open={
            Object.keys(achievementSelected).length !== 0 && props.journalOpen
          }
          onClick={() => props.closeJournal()}
        >
          {console.log()}
          <JournalContainer
            onClick={(e) => e.stopPropagation()}
            videoVisible={validURL(journalVideoData)}
          >
            {/* <CloseButton onClick={() => props.closeJournal()}>
          <FaTimes />
        </CloseButton> */}
            {validURL(journalVideoData) === true && (
              <VideoInnerContainer>
                <VideoInput>
                  <input
                    spellCheck={false}
                    value={journalVideoData}
                    onChange={journalVideoChanged}
                    placeholder="Enter Video URL.."
                  />
                </VideoInput>

                <VideoContainer>
                  <ReactPlayer
                    url={journalVideoData}
                    controls
                    width={"100%"}
                    height={"100%"}
                  />
                </VideoContainer>
              </VideoInnerContainer>
            )}
            <JournalInnerContainer>
              <div style={{ marginRight: "0.75rem" }}>
                <AchievementJournal
                  achievement={achievementSelected}
                  refreshViewWithoutFetch={refreshViewWithoutFetch}
                />
              </div>
              {validURL(journalVideoData) === false && (
                <VideoInput>
                  <input
                    style={{ marginBottom: "1rem" }}
                    spellCheck={false}
                    value={journalVideoData}
                    placeholder="Enter Video URL.."
                    onChange={journalVideoChanged}
                  />
                </VideoInput>
              )}
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
      )}
    </MainContainer>
  );
}
