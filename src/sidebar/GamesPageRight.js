import React from "react";
import {
  FaCheck,
  FaGripHorizontal,
  FaHourglass,
  FaSortAlphaDown,
  FaSortAlphaDownAlt,
} from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  cursor: pointer;
`;

const Subheader = styled.div`
  color: #fefefe;
  font-size: 0.6rem;
  align-self: flex-start;
  margin: 0.5rem 1rem;
  text-align: left;
`;

const RightMenuItem = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5rem 1rem;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  color: #959da6;

  &:hover {
    background-color: rgba(122, 132, 148, 0.26);
    color: #f5f5f5;
  }
`;
const Icon = styled.div`
  font-size: 1rem;
  transform: translateY(-1px);
`;
const Title = styled.div`
  display: flex;
  font-size: 0.9rem;
  margin-left: 1rem;
  align-items: center;
  flex-direction: row;
`;

export default function GamesPageRight(props) {
  return (
    <Container>
      <Subheader>SORT OPTIONS</Subheader>
      <RightMenuItem onClick={() => props.sortHandler(0)}>
        <Icon>
          <FaCheck />
        </Icon>
        <Title>Completion</Title>
      </RightMenuItem>
      <RightMenuItem onClick={() => props.sortHandler(1)}>
        <Icon>
          <FaHourglass />
        </Icon>
        <Title>Playtime</Title>
      </RightMenuItem>
      <RightMenuItem onClick={() => props.sortHandler(2)}>
        <Icon>
          <FaSortAlphaDown />
        </Icon>
        <Title>Name A-Z</Title>
      </RightMenuItem>
      <RightMenuItem onClick={() => props.sortHandler(3)}>
        <Icon>
          <FaSortAlphaDownAlt />
        </Icon>
        <Title>Name Z-A</Title>
      </RightMenuItem>
      <Subheader>VIEW OPTIONS</Subheader>
      <RightMenuItem onClick={() => props.viewHandler(0)}>
        <Icon>
          <FaGripHorizontal />
        </Icon>
        <Title>Minimal</Title>
      </RightMenuItem>
      <RightMenuItem onClick={() => props.viewHandler(1)}>
        <Icon>
          <FaGripHorizontal />
        </Icon>
        <Title>Normal</Title>
      </RightMenuItem>
    </Container>
  );
}
