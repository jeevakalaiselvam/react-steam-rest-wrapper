import { Card } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const OverlayContainer = styled.div`
  display: flex;
  position: relative;
  min-width: 100vw;
  flex-direction: column;
`;

const CardBackground = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  left: 0;
  background-image: url("./images/bgcard.png");
  z-index: 10;
  flex-direction: column;
`;

const ImageRow = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

const GameImage = styled.div`
  width: 30px;
  height: 30px;
  background-image: url("${(props) => props.image}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export default function AllAchievementsOverlay(props) {
  const SLICE_ROW = 20;
  const images = props.images;

  const getRandomImages = (images, count) => {
    let randomImages = [];
    let start = count;
    while (count > 0) {
      randomImages.push(images[Math.floor(Math.random() * images.length)]);
      count--;
    }
    return randomImages;
  };

  return (
    <OverlayContainer>
      <CardBackground></CardBackground>
      <ImageRow>
        {images &&
          images.length &&
          getRandomImages(images, SLICE_ROW).map((image) => {
            return <GameImage image={image} key={uuidv4()} />;
          })}
      </ImageRow>
      <ImageRow>
        {images &&
          images.length &&
          getRandomImages(images, SLICE_ROW).map((image) => {
            return <GameImage image={image} key={uuidv4()} />;
          })}
      </ImageRow>
      <ImageRow>
        {images &&
          images.length &&
          getRandomImages(images, SLICE_ROW).map((image) => {
            return <GameImage image={image} key={uuidv4()} />;
          })}
      </ImageRow>
      <ImageRow>
        {images &&
          images.length &&
          getRandomImages(images, SLICE_ROW).map((image) => {
            return <GameImage image={image} key={uuidv4()} />;
          })}
      </ImageRow>
      <ImageRow>
        {images &&
          images.length &&
          getRandomImages(images, SLICE_ROW).map((image) => {
            return <GameImage image={image} key={uuidv4()} />;
          })}
      </ImageRow>
      <ImageRow>
        {images &&
          images.length &&
          getRandomImages(images, SLICE_ROW).map((image) => {
            return <GameImage image={image} key={uuidv4()} />;
          })}
      </ImageRow>
    </OverlayContainer>
  );
}
