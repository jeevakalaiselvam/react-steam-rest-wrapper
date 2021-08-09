import React, { useState } from "react";
import {
  FaCheck,
  FaFilter,
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
  background-color: ${(props) =>
    props.selected ? "rgba(122, 132, 148, 0.26)" : "rgba(122, 132, 148, 0)"};
  color: ${(props) => (props.selected ? "#f5f5f5" : "#959da6")};

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
  const [sortSelectedItems, setSortSelectedItems] = useState([
    "sort_completion",
  ]);
  const [selectSelectedItems, setSelectSelectedItems] = useState([
    "select_all",
  ]);
  const [viewSelectedItems, setViewSelectedItems] = useState([
    "select_minimum",
  ]);

  return (
    <Container>
      <Subheader>SELECTION OPTIONS</Subheader>
      <RightMenuItem
        onClick={() => {
          props.selectHandler(0);
          setSelectSelectedItems((old) => ["select_all"]);
        }}
        selected={selectSelectedItems.includes("select_all")}
      >
        <Icon>
          <FaFilter />
        </Icon>
        <Title>All</Title>
      </RightMenuItem>
      <RightMenuItem
        onClick={() => {
          props.selectHandler(1);
          setSelectSelectedItems((old) => ["select_completed"]);
        }}
        selected={selectSelectedItems.includes("select_completed")}
      >
        <Icon>
          <FaFilter />
        </Icon>
        <Title>Completed</Title>
      </RightMenuItem>
      <RightMenuItem
        onClick={() => {
          props.selectHandler(2);
          setSelectSelectedItems((old) => ["select_started"]);
        }}
        selected={selectSelectedItems.includes("select_started")}
      >
        <Icon>
          <FaFilter />
        </Icon>
        <Title>Started</Title>
      </RightMenuItem>
      <RightMenuItem
        onClick={() => {
          props.selectHandler(0);
          setSelectSelectedItems((old) => ["select_notstarted"]);
        }}
        selected={selectSelectedItems.includes("select_notstarted")}
      >
        <Icon>
          <FaFilter />
        </Icon>
        <Title>Not Started</Title>
      </RightMenuItem>
      <Subheader>SORT OPTIONS</Subheader>
      <RightMenuItem
        onClick={() => {
          props.sortHandler(0);

          setSortSelectedItems((old) => ["sort_completion"]);
        }}
        selected={sortSelectedItems.includes("sort_completion")}
      >
        <Icon>
          <FaCheck />
        </Icon>
        <Title>Completion</Title>
      </RightMenuItem>
      <RightMenuItem
        onClick={() => {
          props.sortHandler(1);
          setSortSelectedItems((old) => ["sort_playtime"]);
        }}
        selected={sortSelectedItems.includes("sort_playtime")}
      >
        <Icon>
          <FaHourglass />
        </Icon>
        <Title>Playtime</Title>
      </RightMenuItem>
      <RightMenuItem
        onClick={() => {
          props.sortHandler(2);
          setSortSelectedItems((old) => ["sort_nameaz"]);
        }}
        selected={sortSelectedItems.includes("sort_nameaz")}
      >
        <Icon>
          <FaSortAlphaDown />
        </Icon>
        <Title>Name A-Z</Title>
      </RightMenuItem>
      <RightMenuItem
        onClick={() => {
          props.sortHandler(3);
          setSortSelectedItems((old) => ["sort_nameza"]);
        }}
        selected={sortSelectedItems.includes("sort_nameza")}
      >
        <Icon>
          <FaSortAlphaDownAlt />
        </Icon>
        <Title>Name Z-A</Title>
      </RightMenuItem>
      <Subheader>VIEW OPTIONS</Subheader>
      <RightMenuItem
        onClick={() => {
          props.viewHandler(0);
          setViewSelectedItems((old) => ["view_minimal"]);
        }}
        selected={viewSelectedItems.includes("view_minimal")}
      >
        <Icon>
          <FaGripHorizontal />
        </Icon>
        <Title>Minimal</Title>
      </RightMenuItem>
      <RightMenuItem
        onClick={() => {
          props.viewHandler(1);
          setViewSelectedItems((old) => ["view_normal"]);
        }}
        selected={viewSelectedItems.includes("view_normal")}
      >
        <Icon>
          <FaGripHorizontal />
        </Icon>
        <Title>Normal</Title>
      </RightMenuItem>
    </Container>
  );
}
