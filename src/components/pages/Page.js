import React, { useState } from "react";
import SidebarLeft from "../sidebar/SidebarLeft";
import Header from "../header/Header";
import styled from "styled-components";
import SidebarRight from "../sidebar/SidebarRight";

const MainContainer = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: row;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  flex: 1;
  align-items: center;
  padding: 0.5rem;
  justify-content: flex-start;

  @media (max-width: 769px) {
    margin-top: 60px;
  }
`;

export default function Page(props) {
  return (
    <>
      <Header title={props.title} />
      <MainContainer>
        <SidebarLeft
          leftMenuItem={props.leftMenuItem}
          sidebarWidth={props.sidebarLeftWidth}
        />
        <ContentContainer>{props.children}</ContentContainer>
        <SidebarRight
          rightMenuItem={props.rightMenuItem}
          sidebarWidth={props.sidebarRightWidth}
          sidebarRightVisible={props.sidebarRightVisible}
        />
      </MainContainer>
    </>
  );
}
