import React, { useContext } from "react";
import { GamesContext } from "../context/GameContext";
import styled from "styled-components";
import SidebarItem from "../components/ui/SidebarItem";
import { FaClock, FaPercentage } from "react-icons/fa";

const RightMenu = styled.div`
  padding: 0.5rem;
`;

export default function GamesPageRightMenu() {
  const [games] = useContext(GamesContext);

  const sortGamesByPlaytime = () => {
    console.log("Sorting games by playtime");
  };

  const sortGamesByCompletion = () => {};

  return (
    <RightMenu>
      <SidebarItem
        title='Sort by Playtime'
        desc='Sort games by playtime'
        sidebarItemClicked={sortGamesByPlaytime}
      >
        <FaClock style={{ width: "20px", height: "20px" }} />
      </SidebarItem>
      <SidebarItem
        title='Sort by Completion'
        desc='Sort games by completion'
        sidebarItemClicked={sortGamesByPlaytime}
      >
        <FaPercentage style={{ width: "20px", height: "20px" }} />
      </SidebarItem>
    </RightMenu>
  );
}
