import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";

const Home = () => {
  return (
    <>
      <Container>
        <ImgSlider />
      </Container>
    </>
  );
};
const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0% calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;
  &::before {
    content: "";
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: -1;
  }
`;

export default Home;