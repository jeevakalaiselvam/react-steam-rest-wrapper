import React from "react";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import NavItem from "../ui/NavItem";
import BlackToolTip from "../ui/BlackToolTip";
import { HiHome } from "react-icons/hi";
import { IoGameController } from "react-icons/io5";

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 20;
  left: ${({ sidebarOpen }) => (sidebarOpen ? "0" : "-100%")};
  transition: all 0.2s;
  width: 200px;
  min-height: 100vh;
  background-color: rgba(10, 17, 25, 0.8);
  z-index: 10;
  text-shadow: rgba(10, 17, 25, 0.45);
  border-right-color: rgba(10, 17, 25, 0.6);

  @media (min-width: 769px) {
    width: 230px;
    position: relative;
    display: block;
    top: 0;
    left: 0;
  }
`;

export default function Sidebar(props) {
  return (
    <SidebarContainer
      sidebarOpen={props.sidebarOpen}
      onClick={props.sidebarItemClicked}
    >
      <NavItem title='Overview' desc='Profile overview' navigate='/'>
        <HiHome style={{ width: "20px", height: "20px" }} />
      </NavItem>

      <NavItem title='Owned Games' desc='All your Games' navigate='/games'>
        <FaIcons.FaGamepad style={{ width: "20px", height: "20px" }} />
      </NavItem>
      <NavItem
        title='Achievements'
        desc='All your Achievements'
        navigate='/achievements'
      >
        <FaIcons.FaTrophy style={{ width: "20px", height: "20px" }} />
      </NavItem>
      <NavItem
        title='History'
        desc='Your Achievement History'
        navigate='/history'
      >
        <FaIcons.FaBookOpen style={{ width: "20px", height: "20px" }} />
      </NavItem>
      <NavItem title='Milestones' desc='Your Milestones' navigate='/milestones'>
        <FaIcons.FaMedal style={{ width: "20px", height: "20px" }} />
      </NavItem>

      <NavItem
        title='Games Backlog'
        desc='Your Games Backlog'
        navigate='/gamesbacklog'
      >
        <FaIcons.FaFolderOpen style={{ width: "20px", height: "20px" }} />
      </NavItem>
    </SidebarContainer>
  );
}
