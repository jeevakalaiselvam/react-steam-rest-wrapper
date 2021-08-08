import React, { useState } from "react";
import { FaTrophy } from "react-icons/fa";
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
  border: 1px solid ${(props) => (props.hover ? "#f5f5f5" : "#00000000")};

  @media only screen and (min-width: 1361px) {
    width: 18%;
    height: 10vh;
  }
  @media only screen and (max-width: 1360px) and (min-width: 1201px) {
    width: 22%;
    height: 10vh;
  }
  @media only screen and (max-width: 1200px) and (min-width: 1061px) {
    width: 22%;
    height: 10vh;
  }
  @media only screen and (max-width: 1060px) and (min-width: 961px) {
    width: 30%;
    height: 10vh;
  }
  @media only screen and (max-width: 960px) and (min-width: 769px) {
    width: 46%;
    height: 10vh;
  }
  @media only screen and (max-width: 768px) and (min-width: 481px) {
    width: 46%;
    height: 14vh;
  }
  @media only screen and (max-width: 480px) {
    width: 46%;
    height: 13vh;
  }
`;

const InfoContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  width: 100%;
  background-color: rgba(10, 17, 25, 0.4);
  opacity: ${(props) => (props.hover ? "1" : "0")};
`;

export default function GameCardSmall(props) {
  const game = props.game;

  const [hover, setHover] = useState(false);

  const mouseEnterHandler = () => {
    setHover((old) => true);
  };
  const mouseLeaveHandler = () => {
    setHover((old) => false);
  };

  return (
    <Card image={game.image}>
      <InfoContainer
        hover={hover}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        <FaTrophy />
      </InfoContainer>
    </Card>
  );
}
