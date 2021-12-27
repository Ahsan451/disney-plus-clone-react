import React from "react";
import styled from "styled-components";

const Movies = () => {
  return (
    <>
      <Container>
        <h4>Recommended for you</h4>
        <Contant>
          <Wrap>
            <img src="/images/simson.jpg" alt="" />
          </Wrap>
          <Wrap>
            <img src="/images/simson.jpg" alt="" />
          </Wrap>
          <Wrap>
            <img src="/images/simson.jpg" alt="" />
          </Wrap>
          <Wrap>
            <img src="/images/simson.jpg" alt="" />
          </Wrap>
        </Contant>
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: 30px 0px 26px 0px;
  h4 {
    text-transform: uppercase;
  }
`;
const Contant = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  `;

const Wrap = styled.div`
overflow: hidden;
border: solid 3px rgba(249,249,249,0.1);
border-radius: 10px;
margin-top: 30px;
transition: all 250ms linear;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
}
&:hover{
  cursor: pointer;
  transform: scale(1.05);
  border: 3px solid rgba(249,249,249,0.8);
  box-shadow: rgb(0 0 0 / 80%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
`;

export default Movies;
