import React, { useState } from "react";
import SidebarLeft from "../sidebar/SidebarLeft";
import Header from "../header/Header";
import styled from "styled-components";
import SidebarRight from "../sidebar/SidebarRight";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  align-items: center;
  padding: 0.5rem;
  justify-content: flex-start;

  @media (max-width: 769px) {
    margin-top: 60px;
  }
`;

export default function Page(props) {
  const [sidebarOpenLeft, setSidebarOpenLeft] = useState(false);
  const [sidebarOpenRight, setSidebarOpenRight] = useState(false);

  const toggleNavLeft = () => {
    setSidebarOpenLeft((oldSidebar) => !oldSidebar);
  };

  const sidebarItemClickedLeft = () => {
    setSidebarOpenLeft((oldSidebar) => false);
  };

  const toggleNavRight = () => {
    console.log("TOGGLING NAV RIGHT");
    setSidebarOpenRight((oldSidebar) => !oldSidebar);
  };

  const sidebarItemClickedRight = () => {
    setSidebarOpenRight((oldSidebar) => false);
  };

  const openSideBarRight = () => {
    setSidebarOpenRight((oldSidebar) => true);
  };

  return (
    <>
      <Header
        toggleNavLeft={toggleNavLeft}
        sidebarOpenLeft={sidebarOpenLeft}
        toggleNavRight={toggleNavRight}
        sidebarOpenRight={sidebarOpenRight}
        title={props.title}
        showRightMenu={props.showRightMenu}
        openRightMenu={props.openRightMenu}
      />
      <MainContainer>
        <SidebarLeft
          sidebarOpenLeft={sidebarOpenLeft}
          sidebarItemClickedLeft={sidebarItemClickedLeft}
        />
        <ContentContainer>{props.children}</ContentContainer>

        <SidebarRight
          size={props.size || ""}
          sidebarOpenRight={sidebarOpenRight}
          sidebarItemClickedRight={sidebarItemClickedRight}
          rightMenuItem={props.rightMenuItem}
          showRightMenu={props.showRightMenu}
          openRightMenu={props.openRightMenu || sidebarOpenRight}
        />
      </MainContainer>
    </>
  );
}
