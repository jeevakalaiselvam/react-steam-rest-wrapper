import React from "react";
import styled from "styled-components";
import { FaBars, FaEllipsisV } from "react-icons/fa";

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  padding: 0.5rem;
  background-color: rgba(10, 17, 25, 0.6);
  flex-direction: row;
`;

const LeftNav = styled.div`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const MiddleNav = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RightNav = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <LeftNav>
        <FaBars />
      </LeftNav>
      <MiddleNav>Middle</MiddleNav>
      <RightNav>
        <FaEllipsisV />
      </RightNav>
    </HeaderContainer>
  );
}
