import React, { useContext } from "react";
import { GamesContext } from "../context/GameContext";
import styled from "styled-components";
import SidebarItem from "../components/ui/SidebarItem";
import {
  FaClock,
  FaPercentage,
  FaCheck,
  FaSortAlphaDown,
  FaSortAlphaDownAlt,
  FaGripHorizontal,
} from "react-icons/fa";

const RightMenu = styled.div`
  padding: 0.5rem;
`;

const Title = styled.div`
  padding: 0.5rem;
  font-size: 0.8rem;
`;

export default function AchievementsPageRightMenu() {
  const { setViewOptionAchievements, setSortOptionAchievements } =
    useContext(GamesContext);

  return (
    <RightMenu>
      <Title>Sort Options</Title>
      <SidebarItem
        title='Recent'
        desc='Sort achievements by recent'
        sidebarItemClicked={() => {
          localStorage.setItem("ACHIEVEMENTS_SORT_OPTION", 0);
          setSortOptionAchievements((old) => 0);
        }}
      >
        <FaClock style={{ width: "20px", height: "20px" }} />
      </SidebarItem>
      <SidebarItem
        title='Name A-Z'
        desc='Sort games by names ascending'
        sidebarItemClicked={() => {
          localStorage.setItem("ACHIEVEMENTS_SORT_OPTION", 1);
          setSortOptionAchievements((old) => 1);
        }}
      >
        <FaSortAlphaDown style={{ width: "20px", height: "20px" }} />
      </SidebarItem>
      <SidebarItem
        title='Name Z-A'
        desc='Sort games by names descending'
        sidebarItemClicked={() => {
          localStorage.setItem("ACHIEVEMENTS_SORT_OPTION", 2);
          setSortOptionAchievements((old) => 2);
        }}
      >
        <FaSortAlphaDownAlt style={{ width: "20px", height: "20px" }} />
      </SidebarItem>

      <Title>View Options</Title>
      <SidebarItem
        title='Minimal'
        desc='Small view type'
        sidebarItemClicked={() => {
          localStorage.setItem("ACHIEVEMENTS_VIEW_OPTION", 0);
          setViewOptionAchievements((old) => 0);
        }}
      >
        <FaGripHorizontal style={{ width: "20px", height: "20px" }} />
      </SidebarItem>
      <SidebarItem
        title='Normal'
        desc='Normal view type'
        sidebarItemClicked={() => {
          localStorage.setItem("ACHIEVEMENTS_VIEW_OPTION", 1);
          setViewOptionAchievements((old) => 1);
        }}
      >
        <FaGripHorizontal style={{ width: "20px", height: "20px" }} />
      </SidebarItem>
    </RightMenu>
  );
}
