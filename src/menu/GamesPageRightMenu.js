import React, { useContext } from "react";
import { GamesContext } from "../context/GameContext";
import styled from "styled-components";
import SidebarItem from "../components/ui/SidebarItem";
import { FaClock, FaPercentage } from "react-icons/fa";

const RightMenu = styled.div`
  padding: 0.5rem;
`;

export default function GamesPageRightMenu() {
  const { contextSortGamePlaytime, contextSortGameCompletion } =
    useContext(GamesContext);

  const sortGamesByPlaytime = () => {
    contextSortGamePlaytime();
  };

  const sortGamesByCompletion = () => {
    contextSortGameCompletion();
  };

  return (
    <RightMenu>
      <SidebarItem
        title='Playtime'
        desc='Sort games by playtime'
        sidebarItemClicked={sortGamesByPlaytime}
      >
        <FaClock style={{ width: "20px", height: "20px" }} />
      </SidebarItem>
      <SidebarItem
        title='Completion'
        desc='Sort games by completion'
        sidebarItemClicked={sortGamesByCompletion}
      >
        <FaPercentage style={{ width: "20px", height: "20px" }} />
      </SidebarItem>
    </RightMenu>
  );
}
