import React, { useContext } from "react";
import styled from "styled-components";
import {
  FaBars,
  FaEllipsisV,
  FaGamepad,
  FaMedal,
  FaTimes,
  FaTrophy,
} from "react-icons/fa";
import { GameContext } from "../../context/GameContext";

const HeaderContainer = styled.div`
  width: 100%;
  padding: 0.5rem;
  z-index: 1;
  background-color: rgba(10, 17, 25, 1);
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 840px) {
    min-height: 60px;
    position: fixed;
    max-height: 60px;
  }
  @media only screen and (min-width: 841px) {
    min-height: 0px;
    max-height: 0px;
    display: none;
  }
`;

const LeftNav = styled.div`
  font-size: 1.4rem;
  cursor: pointer;
  display: flex;
  padding: 0.5rem;
  align-items: center;
  justify-content: center;
  height: 100%;
  &:hover {
    color: #f5f5f5;
  }
`;

const RightNav = styled.div`
  font-size: 1.4rem;
  height: 100%;
  display: flex;
  padding: 0.5rem;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  &:hover {
    color: #f5f5f5;
  }
`;

const MiddleNav = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const IconSetGold = styled.div`
  display: flex;
  align-items: center;
  text-shadow: 0 0 6px #da8c4a;
  color: #fecc09;
  justify-content: center;
  flex-direction: row;
  text-shadow: 2px 2px 2px rgb(10 17 25 / 45%);
`;
const IconSetBlue = styled.div`
  display: flex;
  margin-left: 1.5rem;
  color: #55aece;
  text-shadow: 2px 2px 2px rgb(10 17 25 / 45%);
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
const IconSetGreen = styled.div`
  display: flex;
  margin-left: 1.5rem;
  align-items: center;
  color: #a5c93a;
  justify-content: center;
  text-shadow: 2px 2px 2px rgb(10 17 25 / 45%);
  flex-direction: row;
`;

const Icon = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Data = styled.div`
  display: flex;
  margin-left: 0.5rem;
  font-size: 1.5rem;
  align-items: center;
  justify-content: center;
`;

export default function Header(props) {
  const { navLeftOpen, setNavLeftOpen, navRightOpen, setNavRightOpen } =
    useContext(GameContext);

  const toggleNavLeft = () => {
    setNavLeftOpen((navState) => !navState);
  };

  const toggleNavRight = () => {
    setNavRightOpen((navState) => !navState);
  };

  return (
    <HeaderContainer>
      <LeftNav onClick={toggleNavLeft}>
        {!navLeftOpen && <FaBars />}
        {navLeftOpen && <FaTimes />}
      </LeftNav>
      <MiddleNav>
        <IconSetGold>
          <Icon>
            <FaMedal />
          </Icon>
          <Data>{props.totalPerfectGames}</Data>
        </IconSetGold>
        <IconSetBlue>
          <Icon>
            <FaTrophy />
          </Icon>
          <Data>{props.totalAchievements}</Data>
        </IconSetBlue>
        <IconSetGreen>
          <Icon>
            <FaGamepad />
          </Icon>
          <Data>{props.totalGames}</Data>
        </IconSetGreen>
      </MiddleNav>
      <RightNav onClick={toggleNavRight}>
        {!navRightOpen && <FaEllipsisV />}
        {navRightOpen && <FaTimes />}
      </RightNav>
    </HeaderContainer>
  );
}
