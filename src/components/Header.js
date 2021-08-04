import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import SidebarItem from "./SidebarItem";

const Nav = styled.div`
  background: #15171c;
  padding: 1rem 0rem;
  background-color: rgba(10, 17, 25, 0.25);
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 1.5rem;
  display: flex;
  z-index: 100;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  background-color: rgba(10, 17, 25, 0.9);
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
  padding: 0 0.2rem;
`;
export default function Header() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar((old) => !old);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavIcon to='#'>
            {!sidebar && <FaIcons.FaBars onClick={showSidebar} />}
            {sidebar && <FaIcons.FaTimes onClick={showSidebar} />}
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <SidebarItem
              title='Games'
              path='/all-games'
              linkClicked={showSidebar}
            >
              <FaIcons.FaGamepad />
            </SidebarItem>
            <SidebarItem
              title='Achievements'
              path='/all-achievements'
              linkClicked={showSidebar}
            >
              <FaIcons.FaTrophy />
            </SidebarItem>
            <SidebarItem
              title='History'
              path='/achievements-history'
              linkClicked={showSidebar}
            >
              <FaIcons.FaBookOpen />
            </SidebarItem>
            <SidebarItem
              title='Milestones'
              path='/milestones'
              linkClicked={showSidebar}
            >
              <FaIcons.FaMedal />
            </SidebarItem>
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
}
