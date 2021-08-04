import React from "react";
import HeaderLarge from "./HeaderLarge";
import HeaderSmall from "./HeaderSmall";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";

const HeaderSmallContainer = styled.div`
  @media (max-width: 768px) {
    display: block;
  }
  display: none;
`;

const HeaderLargeContainer = styled.div`
  @media (min-width: 769px) {
    display: block;
  }
  display: none;
`;

export default function Header(props) {
  return (
    <>
      <HeaderSmallContainer>
        <HeaderSmall
          toggleNav={props.toggleNav}
          sidebarOpen={props.sidebarOpen}
        />
      </HeaderSmallContainer>
      <HeaderLargeContainer>
        <HeaderLarge />
      </HeaderLargeContainer>
    </>
  );
}
