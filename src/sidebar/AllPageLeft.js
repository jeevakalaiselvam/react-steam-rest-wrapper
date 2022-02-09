import React, { useEffect, useState } from "react";
import {
  FaBinoculars,
  FaBookOpen,
  FaChartBar,
  FaGamepad,
  FaMedal,
  FaRandom,
  FaSlidersH,
  FaStar,
  FaTrophy,
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
} from "../helper/storage";
import { fetchGamesInfo } from "../action/games";
import { getMedalCompletedGames, getTotalAchievements } from "../helper/other";

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
  flex-direction: row;
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
  text-align:center
  justify-content: center;
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
  align-items: center;
  font-size: 1.4rem;
  justify-content: center;
`;

const MedalMilestones = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.2rem;
  justify-content: center;
`;

export default function AllPageLeft() {
  const [gameInfo, setGameInfo] = useState({
    total_games: _STORAGE_READ(STORAGE_HEADER_TOTAL_GAMES) ?? 0,
    average_completion: _STORAGE_READ(STORAGE_HEADER_AVERAGE_COMPLETION) ?? 0,
    completed_achievements:
      _STORAGE_READ(STORAGE_HEADER_TOTAL_ACHIEVEMENTS) ?? 0,
    perfect_games_count: _STORAGE_READ(STORAGE_HEADER_TOTAL_PERFECT_GAMES) ?? 0,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAllGamesInfo = async () => {
      setLoading((old) => true);
      const gameInfoInnerResponse = await fetchGamesInfo();
      setGameInfo((old) => gameInfoInnerResponse);
      setLoading((old) => false);
    };
    getAllGamesInfo();
  }, []);

  const totalMedals = getMedalCompletedGames(gameInfo);
  const totalAchievements = getTotalAchievements(gameInfo);

  return (
    <MainMenu>
      <IconSetContainer visible={!loading}>
        <IconSetMedal color="#b666d2">
          <DataMedal>{totalAchievements}</DataMedal>
          <CountMedal>
            <FaTrophy />
          </CountMedal>
        </IconSetMedal>
        <IconSetMedal color="#fecc09">
          <DataMedal>{Math.floor(totalAchievements / 10)}</DataMedal>
          <MedalMilestones>
            <FaMedal />
          </MedalMilestones>
        </IconSetMedal>
        {/* <IconSetMedal color="#fecc09">
          <DataMedal>{totalMedals.gold}</DataMedal>
          <FaMedal />
        </IconSetMedal>
        <IconSetMedal color="#b666d2">
          <DataMedal>{totalMedals.purple}</DataMedal>
          <FaMedal />
        </IconSetMedal>
        <IconSetMedal color="#a6ff00">
          <DataMedal>{totalMedals.green}</DataMedal>
          <FaMedal />
        </IconSetMedal>
        <IconSetMedal color="#C0C0C0">
          <DataMedal>{totalMedals.bronze}</DataMedal>
          <FaMedal />
        </IconSetMedal>
        <IconSetMedal color="#cd7f32">
          <DataMedal>{totalMedals.copper}</DataMedal>
          <FaMedal />
        </IconSetMedal> */}
      </IconSetContainer>
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
