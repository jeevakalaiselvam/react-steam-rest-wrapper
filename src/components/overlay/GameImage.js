import React from "react";
import styled from "styled-components";

const SetContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 100%;
  overflow: hidden;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  overflow: hidden;
  background-image: url("${(props) => props.image}");
`;

export default function GameImage(props) {
  return (
    <SetContainer>
      <Container image={props.game.image}></Container>
    </SetContainer>
  );
}
