import React, { useEffect, useState } from "react";
import {
  FaAngleDoubleUp,
  FaBinoculars,
  FaBookOpen,
  FaChartBar,
  FaGamepad,
  FaMedal,
  FaRandom,
  FaSlidersH,
  FaSortAlphaUp,
  FaSortUp,
  FaStar,
  FaSteam,
  FaTrophy,
  FaUps,
  FaXbox,
} from "react-icons/fa";
import MenuItemLink from "../components/core/MenuItemLink";
import styled from "styled-components";
import {
  ACHIEVEMENTS_PAGE_INDEX,
  BACKLOG_PAGE_INDEX,
  CURRENT_PAGE,
  GAMES_PAGE_INDEX,
  HISTORY_PAGE_INDEX,
  MILESTONE_PAGE_INDEX,
  NEXT_PAGE_INDEX,
  RANDOM_PAGE_INDEX,
  CURRENT_GAME_PAGE_INDEX,
  SETTINGS_PAGE_INDEX,
  STORAGE_HEADER_AVERAGE_COMPLETION,
  STORAGE_HEADER_TOTAL_ACHIEVEMENTS,
  STORAGE_HEADER_TOTAL_GAMES,
  STORAGE_HEADER_TOTAL_PERFECT_GAMES,
  _STORAGE_READ,
  _STORAGE_WRITE,
  KANBAN_INDEX,
  PLANNER_INDEX,
  SELECTED_GAME,
} from "../helper/storage";
import { fetchAchievementsForGame, fetchGamesInfo } from "../action/games";
import {
  getColorFromPercentageVariety,
  getMedalCompletedGames,
  getTotalAchievements,
  getTotalXPForAchievements,
} from "../helper/other";
import { XPLEVELUP } from "../constants/percentage";
import {
  getAchievementsFilteredByPhase,
  getXPSumForAchievements,
} from "../helper/games";
import { Progress } from "antd";

const MainMenu = styled.div`
  width: 100%;
  zindex: 10000;
  display: flex;
  height: 100vh;
  overflow: scroll;
  flex-direction: column;
`;

const Subheader = styled.div`
  color: #fefefe;
  font-size: 0.6rem;
  align-self: flex-start;
  margin: 0.5rem 1rem;
  text-align: left;
`;

const IconSetContainer = styled.div`
  display: flex;
  flex-direction: column;
  opacity: ${(props) => (props.visible ? "1" : "0")};
  padding: 0.5rem;
  align-items: center;
  justify-content: center;
`;

const IconSetMedal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.color};
  flex: 1;
  font-size: 1.3rem;
  justify-content: center;
`;

const IconSetTrophy = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  color: #55aece;
  justify-content: center;
`;

const DataMedal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  font-size: 1.3rem;
  justify-content: center;
`;

const DataToXP = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-size: 0.9rem; ;
`;

const DataTotal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
`;

const CountMedal = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.3rem;
  align-items: center;
  font-size: 1.7rem;
  justify-content: center;
`;

const MedalMilestones = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.2rem;
  justify-content: center;
`;

const JournalButton = styled.div`
  width: 95%;
  background-color: #55aece;
  margin: 0.5rem;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  text-align: center;
  color: rgba(3, 3, 3, 1);
`;

const HistoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HistorySet = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;
const HistoryHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  justify-content: center;
`;
const HistoryIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem 0rem;
  color: #55aece;
`;
const HistoryData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function AllPageLeft({ allAchievements }) {
  const [gameInfo, setGameInfo] = useState({
    total_games: _STORAGE_READ(STORAGE_HEADER_TOTAL_GAMES) ?? 0,
    average_completion: _STORAGE_READ(STORAGE_HEADER_AVERAGE_COMPLETION) ?? 0,
    completed_achievements:
      _STORAGE_READ(STORAGE_HEADER_TOTAL_ACHIEVEMENTS) ?? 0,
    perfect_games_count: _STORAGE_READ(STORAGE_HEADER_TOTAL_PERFECT_GAMES) ?? 0,
  });
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState({ todayCount: 0, weekCount: 0 });

  useEffect(() => {
    const getAllGamesInfo = async () => {
      setLoading((old) => true);
      const gameInfoInnerResponse = await fetchGamesInfo();
      setGameInfo((old) => gameInfoInnerResponse);
      setLoading((old) => false);
    };
    getAllGamesInfo();
  }, []);

  useEffect(() => {
    const getAllAchievements = async (sortOrder, viewOrder) => {
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
      } = getAchievementsFilteredByPhase(allAchievements);
      setCount((old) => ({
        todayCount: getXPSumForAchievements(unlockedTodayAchievements),
        weekCount: getXPSumForAchievements(unlockedWeekAchievements),
      }));
    };

    const achievments = getAllAchievements(0, 0, 1);
  }, [allAchievements]);

  const totalMedals = getMedalCompletedGames(gameInfo);
  const totalAchievements = getTotalAchievements(gameInfo);
  // const achivementCountForVariety = getColorFromPercentageVariety(gameInfo);
  const { totalXP } = getTotalXPForAchievements(gameInfo);

  return (
    <MainMenu>
      <Subheader>PROFILE</Subheader>
      <IconSetContainer visible={!loading}>
        <IconSetMedal color="#67c8eb">
          <CountMedal>
            <FaSteam />
          </CountMedal>
          <DataMedal>Level {Math.floor(totalXP / XPLEVELUP)}</DataMedal>
        </IconSetMedal>
        <IconSetMedal color="#c0c0c0">
          <DataToXP>
            <FaAngleDoubleUp style={{ marginRight: "0.2rem" }} />{" "}
            {(Math.floor(totalXP / XPLEVELUP) + 1) * XPLEVELUP - totalXP} XP
          </DataToXP>
        </IconSetMedal>
        <Progress
          style={{ padding: "0rem 0.5rem" }}
          showInfo={false}
          percent={
            100 -
            Math.floor(
              (((Math.floor(totalXP / XPLEVELUP) + 1) * XPLEVELUP - totalXP) /
                XPLEVELUP) *
                100
            )
          }
        />
      </IconSetContainer>

      <HistoryContainer>
        <HistorySet>
          <HistoryHeader>TODAY</HistoryHeader>
          <HistoryIcon>
            <FaSteam />
          </HistoryIcon>
          <HistoryData>{count.todayCount} XP</HistoryData>
        </HistorySet>
        <HistorySet>
          <HistoryHeader>WEEK</HistoryHeader>
          <HistoryIcon>
            <FaSteam />
          </HistoryIcon>
          <HistoryData>{count.weekCount} XP</HistoryData>
        </HistorySet>
      </HistoryContainer>
      <Subheader>STATS </Subheader>
      {_STORAGE_READ(SELECTED_GAME) && (
        <JournalButton
          onClick={() => {
            window.open(
              `https://steamcommunity.com/id/notreallogan/stats/${_STORAGE_READ(
                SELECTED_GAME
              )}/achievements/`,
              "_blank"
            );
          }}
        >
          STEAM
        </JournalButton>
      )}
      <Subheader>SELECT CATEGORY</Subheader>
      <MenuItemLink
        icon={<FaGamepad />}
        title={"Planner"}
        to={"/planner"}
        navItemClicked={() => {
          _STORAGE_WRITE(CURRENT_PAGE, PLANNER_INDEX);
          window.location.href = `/${_STORAGE_READ(CURRENT_PAGE)}`;
        }}
        selected={_STORAGE_READ(CURRENT_PAGE) === PLANNER_INDEX}
      />
      <MenuItemLink
        icon={<FaGamepad />}
        title={"Kanban"}
        to={"/kanban"}
        navItemClicked={() => {
          _STORAGE_WRITE(CURRENT_PAGE, KANBAN_INDEX);
          window.location.href = `/${_STORAGE_READ(CURRENT_PAGE)}`;
        }}
        selected={_STORAGE_READ(CURRENT_PAGE) === KANBAN_INDEX}
      />
      <MenuItemLink
        icon={<FaGamepad />}
        title={"Ongoing"}
        to={"/currentGame"}
        navItemClicked={() => {
          _STORAGE_WRITE(CURRENT_PAGE, CURRENT_GAME_PAGE_INDEX);
          window.location.href = `/${_STORAGE_READ(CURRENT_PAGE)}`;
        }}
        selected={_STORAGE_READ(CURRENT_PAGE) === CURRENT_GAME_PAGE_INDEX}
      />
      <MenuItemLink
        icon={<FaGamepad />}
        title={"Games"}
        to={"/games"}
        navItemClicked={() => {
          _STORAGE_WRITE(CURRENT_PAGE, GAMES_PAGE_INDEX);
          window.location.href = `/${_STORAGE_READ(CURRENT_PAGE)}`;
        }}
        selected={_STORAGE_READ(CURRENT_PAGE) === GAMES_PAGE_INDEX}
      />
      <MenuItemLink
        icon={<FaTrophy />}
        title={"Achievements"}
        to={"/achievements"}
        navItemClicked={() => {
          _STORAGE_WRITE(CURRENT_PAGE, ACHIEVEMENTS_PAGE_INDEX);
          window.location.href = `/${_STORAGE_READ(CURRENT_PAGE)}`;
        }}
        selected={_STORAGE_READ(CURRENT_PAGE) === ACHIEVEMENTS_PAGE_INDEX}
      />
      <MenuItemLink
        icon={<FaChartBar />}
        title={"History"}
        to={"/history"}
        navItemClicked={() => {
          _STORAGE_WRITE(CURRENT_PAGE, HISTORY_PAGE_INDEX);
          window.location.href = `/${_STORAGE_READ(CURRENT_PAGE)}`;
        }}
        selected={_STORAGE_READ(CURRENT_PAGE) === HISTORY_PAGE_INDEX}
      />
      <MenuItemLink
        icon={<FaBookOpen />}
        title={"Backlog"}
        to={"/backlog"}
        navItemClicked={() => {
          _STORAGE_WRITE(CURRENT_PAGE, BACKLOG_PAGE_INDEX);
          window.location.href = `/${_STORAGE_READ(CURRENT_PAGE)}`;
        }}
        selected={_STORAGE_READ(CURRENT_PAGE) === BACKLOG_PAGE_INDEX}
      />
      <MenuItemLink
        icon={<FaStar />}
        title={"Milestones"}
        to={"/milestone"}
        navItemClicked={() => {
          _STORAGE_WRITE(CURRENT_PAGE, MILESTONE_PAGE_INDEX);
          window.location.href = `/${_STORAGE_READ(CURRENT_PAGE)}`;
        }}
        selected={_STORAGE_READ(CURRENT_PAGE) === MILESTONE_PAGE_INDEX}
      />

      <MenuItemLink
        icon={<FaBinoculars />}
        title={"What's Next"}
        to={"/next"}
        navItemClicked={() => {
          _STORAGE_WRITE(CURRENT_PAGE, NEXT_PAGE_INDEX);
          window.location.href = `/${_STORAGE_READ(CURRENT_PAGE)}`;
        }}
        selected={_STORAGE_READ(CURRENT_PAGE) === NEXT_PAGE_INDEX}
      />
      <MenuItemLink
        icon={<FaRandom />}
        title={"Next Game"}
        to={"/random"}
        navItemClicked={() => {
          _STORAGE_WRITE(CURRENT_PAGE, RANDOM_PAGE_INDEX);
          window.location.href = `/${_STORAGE_READ(CURRENT_PAGE)}`;
        }}
        selected={_STORAGE_READ(CURRENT_PAGE) === RANDOM_PAGE_INDEX}
      />
      <MenuItemLink
        icon={<FaSlidersH />}
        title={"Settings"}
        to={"/settings"}
        navItemClicked={() => {
          _STORAGE_WRITE(CURRENT_PAGE, SETTINGS_PAGE_INDEX);
          window.location.href = `/${_STORAGE_READ(CURRENT_PAGE)}`;
        }}
        selected={_STORAGE_READ(CURRENT_PAGE) === SETTINGS_PAGE_INDEX}
      />
    </MainMenu>
  );
}
