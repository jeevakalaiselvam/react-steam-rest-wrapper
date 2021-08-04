import React, { useState } from "react";
import styled from "styled-components";
import HeaderLarge from "../components/header/HeaderLarge";
import HeaderSmall from "../components/header/HeaderSmall";
import NavItem from "../components/NavItem";
import * as FaIcons from "react-icons/fa";

const HeaderSmallContainer = styled.div`
  @media (max-width: 768px) {
    display: block;
  }
  display: none;
`;

const HeaderLargeContainer = styled.div`
  @media (min-width: 769px) {
    display: block;
  }
  display: none;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 20;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
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

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Homepage() {
  const [sidebar, setSidebar] = useState(false);

  const toggleNav = () => {
    console.log("NAV TOGGLE");
    setSidebar((oldSidebar) => !oldSidebar);
  };

  return (
    <>
      <HeaderSmallContainer>
        <HeaderSmall showOrHideNav={toggleNav} />
      </HeaderSmallContainer>
      <HeaderLargeContainer>
        <HeaderLarge />
      </HeaderLargeContainer>
      <MainContainer onClick={toggleNav}>
        <SidebarContainer sidebar={sidebar}>
          <NavItem title='Games'>
            <FaIcons.FaGamepad
              style={{ width: "20px", height: "20pxs" }}
              navigatePath='/games'
            />
          </NavItem>
          <NavItem title='Achievements'>
            <FaIcons.FaTrophy
              style={{ width: "20px", height: "20px" }}
              navigatePath='/achievements'
            />
          </NavItem>
          <NavItem title='History'>
            <FaIcons.FaBookOpen
              style={{ width: "20px", height: "20px" }}
              navigatePath='/history'
            />
          </NavItem>
          <NavItem title='Milestones'>
            <FaIcons.FaMedal
              style={{ width: "20px", height: "20px" }}
              navigatePath='/milestones'
            />
          </NavItem>
        </SidebarContainer>
        <ContentContainer>Homepage</ContentContainer>
      </MainContainer>
    </>
  );
}
