import React from "react";
import styled from "styled-components";
import NavItem from "../NavItem";
import * as FaIcons from "react-icons/fa";

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
    <SidebarContainer sidebarOpen={props.sidebarOpen}>
      <NavItem title='Games'>
        <FaIcons.FaGamepad
          style={{ width: "20px", height: "20pxs" }}
          navigate='/games'
        />
      </NavItem>
      <NavItem title='Achievements'>
        <FaIcons.FaTrophy
          style={{ width: "20px", height: "20px" }}
          navigate='/achievements'
        />
      </NavItem>
      <NavItem title='History'>
        <FaIcons.FaBookOpen
          style={{ width: "20px", height: "20px" }}
          navigate='/history'
        />
      </NavItem>
      <NavItem title='Milestones'>
        <FaIcons.FaMedal
          style={{ width: "20px", height: "20px" }}
          navigate='/milestones'
        />
      </NavItem>
    </SidebarContainer>
  );
}
