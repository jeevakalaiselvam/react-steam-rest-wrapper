import { React } from "react";
import styled from "styled-components";
import Card from "./Card";

const Overlay = styled.div`
  position: relative;
  width: 100%;
  z-index: 0;
  height: 100%;
`;

const OverlayImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.1;
  z-index: 0;
  width: 100%;
  height: 100%;
`;

const Inner = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  z-index: 100;
  justify-content: center;
`;

export default function ImageOverlayCard(props) {
  return (
    <Overlay>
      <OverlayImage>{props.image}</OverlayImage>
      <Inner>{props.content}</Inner>
    </Overlay>
  );
}
