import React, { useContext } from "react";
import styled from "styled-components";
import { GameContext } from "../../context/GameContext";

const PageContainer = styled.div`
  display: flex;

  flex-direction: row;
  background-color: green;
  min-height: 100vh;
  max-height: 100vh;

  @media only screen and (min-width: 841px) {
    padding-top: 0px;
  }
`;

const SidebarLeftContainer = styled.div`
  display: flex;
  width: ${(props) => props.leftSidebarWidth ?? "200px"};
  min-height: 100vh;
  max-height: 100vh;
  background-color: rgba(10, 17, 25, 1);

  align-items: center;
  flex-direction: column;
  transition: all 0.2s;

  @media only screen and (max-width: 840px) {
    position: fixed;
    left: ${(props) => (props.navLeftOpen ? "0" : "-100%")};
    top: 60px;
  }
  @media only screen and (min-width: 841px) {
    display: flex;
  }
`;

const SidebarRightContainer = styled.div`
  display: flex;
  width: ${(props) => props.rightSidebarWidth ?? "200px"};
  min-height: 100vh;
  max-height: 100vh;

  background-color: rgba(10, 17, 25, 1);
  align-items: center;
  flex-direction: column;
  transition: all 0.2s;

  @media only screen and (max-width: 840px) {
    position: fixed;
    right: ${(props) => (props.navRightOpen ? "0" : "-100%")};
    top: 60px;
  }
  @media only screen and (min-width: 841px) {
    display: flex;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
`;

export default function Page(props) {
  const { navLeftOpen, navRightOpen } = useContext(GameContext);

  return (
    <PageContainer>
      <SidebarLeftContainer
        leftSidebarWidth={props.leftSidebarWidth}
        navLeftOpen={navLeftOpen}
      >
        {props.leftSidebar}
      </SidebarLeftContainer>
      <ContentContainer>{props.content}</ContentContainer>
      <SidebarRightContainer
        rightSidebarWidth={props.rightSidebarWidth}
        navRightOpen={navRightOpen}
      >
        {props.rightSidebar}
      </SidebarRightContainer>
    </PageContainer>
  );
}
