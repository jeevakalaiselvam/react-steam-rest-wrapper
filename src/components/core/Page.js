import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  min-height: 100%;
  max-height: 100%;
  flex-direction: row;
`;

const SidebarLeftContainer = styled.div`
  display: flex;
  width: ${(props) => props.leftSidebarWidth ?? "200px"};
  min-height: 100%;
  max-height: 100%;
  background-color: rgba(10, 17, 25, 0.6);
  padding: 0.5rem;
  align-items: center;
  flex-direction: column;
  transition: all 0.2s;

  @media only screen and (max-width: 840px) {
    position: fixed;
    left: ${(props) => (props.leftSidebarOpen ? "0" : "-100%")};
    top: 0;
  }
  @media only screen and (min-width: 841px) {
    display: flex;
  }
`;

const SidebarRightContainer = styled.div`
  display: flex;
  width: ${(props) => props.rightSidebarWidth ?? "200px"};
  min-height: 100%;
  max-height: 100%;
  padding: 0.5rem;
  background-color: rgba(10, 17, 25, 0.6);
  align-items: center;
  flex-direction: column;
  transition: all 0.2s;

  @media only screen and (max-width: 840px) {
    position: fixed;
    right: ${(props) => (props.rightSidebarOpen ? "0" : "100%")};
    top: 0;
  }
  @media only screen and (min-width: 841px) {
    display: flex;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 0.5rem;
  align-items: center;
  flex-direction: column;
`;

export default function Page(props) {
  return (
    <PageContainer>
      <SidebarLeftContainer
        leftSidebarOpen={props.leftSidebarOpen}
        rightSidebarOpen={props.rightSidebarOpen}
        leftSidebarWidth={props.leftSidebarWidth}
        rightSidebarWidth={props.rightSidebarWidth}
      >
        {props.leftSidebar}
      </SidebarLeftContainer>
      <ContentContainer>{props.content}</ContentContainer>
      <SidebarRightContainer>{props.rightSidebar}</SidebarRightContainer>
    </PageContainer>
  );
}
