import React from "react";
import styled from "styled-components";
import {
  COMPLETION_TARGET,
  TARGET_DEFAULT_COMPLETION,
  _STORAGE_READ,
  _STORAGE_WRITE,
} from "../helper/storage";

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: space-between;
  flex-direction: column;
  overflow: scroll;
  scrollbar-width: thin;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const ContainerInner = styled.div`
  display: flex;
  width: 100%;
  justify-self: flex-start;
  justify-content: flex-start;
  overflow: scroll;
  height: 100%;
  padding: 3rem;
  flex-direction: column;
  background-color: rgba(10, 17, 25, 0.4);
  flex-wrap: wrap;
`;

export default function NextContent(props) {
  return (
    <ContentContainer>
      <ContainerInner>Next</ContainerInner>
    </ContentContainer>
  );
}
