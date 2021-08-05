import React from "react";
import HeaderLarge from "./HeaderLarge";
import HeaderSmall from "./HeaderSmall";
import styled from "styled-components";

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
          toggleNavLeft={props.toggleNavLeft}
          sidebarOpenLeft={props.sidebarOpenLeft}
          toggleNavRight={props.toggleNavRight}
          sidebarOpenRight={props.sidebarOpenRight}
          title={props.title}
        />
      </HeaderSmallContainer>
      <HeaderLargeContainer>
        <HeaderLarge />
      </HeaderLargeContainer>
    </>
  );
}
