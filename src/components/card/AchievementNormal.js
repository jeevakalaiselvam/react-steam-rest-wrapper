import React from "react";
import { FaMedal, FaTrophy } from "react-icons/fa";
import styled from "styled-components";

const CardContainer = styled.div`
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

  @media only screen and (min-width: 1361px) {
    width: 30%;
    height: 20vh;
  }
  @media only screen and (max-width: 1360px) and (min-width: 1201px) {
    width: 30%;
    height: 20vh;
  }
  @media only screen and (max-width: 1200px) and (min-width: 1061px) {
    width: 45%;
    height: 20vh;
  }
  @media only screen and (max-width: 1060px) and (min-width: 961px) {
    width: 45%;
    height: 20vh;
  }
  @media only screen and (max-width: 960px) and (min-width: 769px) {
    width: 45%;
    height: 20vh;
  }
  @media only screen and (max-width: 768px) and (min-width: 631px) {
    width: 45%;
    height: 20vh;
  }
  @media only screen and (max-width: 630px) and (min-width: 481px) {
    width: 96%;
    height: 25vh;
  }
  @media only screen and (max-width: 480px) {
    width: 96%;
    height: 25vh;
  }
`;

const Title = styled.div`
  width: 100%;
  padding: 0.5rem;
  background-color: rgba(10, 17, 25, 0.6);
  color: #fefefe;
  display: flex;
  flex-direction: column;
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const IconInner = styled.div`
  font-size: 1rem;
  color: #fefefe;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(10, 17, 25, 0.8);
  display: flex;
  width: 100%;
  flex-direction: row;
`;

const AchievementData = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  color: #fefefe;
  justify-content: flex-start;
  padding: 0.25rem 0.5rem;
`;
const ToGet = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
`;

const Medal = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  color: gold;
  justify-content: flex-end;
  margin-right: 0.5rem;
`;

const AchievementCount = styled.div`
  margin-left: 0.25rem;
  font-size: 0.9rem;
`;

export default function AchievementNormal(props) {
  const { icon } = props.achievement;

  return <CardContainer image={icon}>Achievement</CardContainer>;
}
