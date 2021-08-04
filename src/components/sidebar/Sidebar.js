import React from "react";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import NavItem from "../ui/NavItem";

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

  @media (min-width: 769px) {
    width: 200px;
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
      <NavItem title='Overview' navigate='/'>
        <FaIcons.FaSteamSquare style={{ width: "20px", height: "20px" }} />
      </NavItem>
      <NavItem title='Games' navigate='/games'>
        <FaIcons.FaGamepad style={{ width: "20px", height: "20px" }} />
      </NavItem>
      <NavItem title='Achievements' navigate='/achievements'>
        <FaIcons.FaTrophy style={{ width: "20px", height: "20px" }} />
      </NavItem>
      <NavItem title='History' navigate='/history'>
        <FaIcons.FaBookOpen style={{ width: "20px", height: "20px" }} />
      </NavItem>
      <NavItem title='Milestones' navigate='/milestones'>
        <FaIcons.FaMedal style={{ width: "20px", height: "20px" }} />
      </NavItem>
    </SidebarContainer>
  );
}