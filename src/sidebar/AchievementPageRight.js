import React from "react";
import {
  FaCheck,
  FaClock,
  FaFilter,
  FaGamepad,
  FaGripHorizontal,
  FaHourglass,
  FaPercentage,
  FaSortAlphaDown,
  FaSortAlphaDownAlt,
  FaTimes,
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
  color: ${(props) => (props.selected ? "#55aece" : "#959da6")};

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

export default function AchievementPageRight(props) {
  return (
    <Container>
      <Subheader>SELECT OPTIONS</Subheader>
      <RightMenuItem
        onClick={() => props.selectHandler(0)}
        selected={props.selectIndex === 0}
      >
        <Icon>
          <FaFilter />
        </Icon>
        <Title>All</Title>
      </RightMenuItem>
      <RightMenuItem
        onClick={() => props.selectHandler(1)}
        selected={props.selectIndex === 1}
      >
        <Icon>
          <FaFilter />
        </Icon>
        <Title>Unlocked</Title>
      </RightMenuItem>
      <Subheader>SORT OPTIONS</Subheader>
      <RightMenuItem
        onClick={() => props.sortHandler(0)}
        selected={props.sortIndex === 0}
      >
        <Icon>
          <FaClock />
        </Icon>
        <Title>Recent</Title>
      </RightMenuItem>
      <RightMenuItem
        onClick={() => props.sortHandler(1)}
        selected={props.sortIndex === 1}
      >
        <Icon>
          <FaPercentage />
        </Icon>
        <Title>Rarity</Title>
      </RightMenuItem>
      <RightMenuItem
        onClick={() => props.sortHandler(2)}
        selected={props.sortIndex === 2}
      >
        <Icon>
          <FaGamepad />
        </Icon>
        <Title>Games</Title>
      </RightMenuItem>
      <RightMenuItem
        onClick={() => props.sortHandler(3)}
        selected={props.sortIndex === 3}
      >
        <Icon>
          <FaSortAlphaDown />
        </Icon>
        <Title>Name A-Z</Title>
      </RightMenuItem>
      <RightMenuItem
        onClick={() => props.sortHandler(4)}
        selected={props.sortIndex === 4}
      >
        <Icon>
          <FaSortAlphaDownAlt />
        </Icon>
        <Title>Name Z-A</Title>
      </RightMenuItem>
      <Subheader>VIEW OPTIONS</Subheader>
      <RightMenuItem
        onClick={() => props.viewHandler(0)}
        selected={props.viewIndex === 0}
      >
        <Icon>
          <FaGripHorizontal />
        </Icon>
        <Title>Minimal</Title>
      </RightMenuItem>
      <RightMenuItem
        onClick={() => props.viewHandler(1)}
        selected={props.viewIndex === 1}
      >
        <Icon>
          <FaGripHorizontal />
        </Icon>
        <Title>Normal</Title>
      </RightMenuItem>
    </Container>
  );
}
