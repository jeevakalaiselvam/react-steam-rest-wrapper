import React from "react";
import { FaMedal, FaTrophy } from "react-icons/fa";
import styled from "styled-components";

const Card = styled.div`
  background-color: rgba(10, 17, 25, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;
  margin: 4px;
  background-image: url("${(props) => props.image}");
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  width: 40px;
  height: 40px;
`;

export default function AchievementMinimal(props) {
  const { icon } = props.achievement;

  return <Card image={icon}></Card>;
}
