import React from "react";
import styled from "styled-components";
import "../index.css";

const Header = () => {
  return (
    <>
      <Nav>
        <Logo src="/images/logo.svg"></Logo>
        <Menu>
          <a href="">
            <img src="/images/home-icon.svg" alt="img" />
            <span>Home</span>
          </a>
          <a href="">
            <img src="/images/search-icon.svg" alt="img" />
            <span>Search</span>
          </a>
          <a href="">
            <img src="/images/watchlist-icon.svg" alt="img" />
            <span>WATCHLIST</span>
          </a>
          <a href="">
            <img src="/images/original-icon.svg" alt="img" />
            <span>originals</span>
          </a>
          <a href="">
            <img src="/images/movie-icon.svg" alt="img" />
            <span>movies</span>
          </a>
          <a href="">
            <img src="/images/series-icon.svg" alt="img" />
            <span>series</span>
          </a>
        </Menu>
        <Profile src="/images/profile.jpg"></Profile>
      </Nav>
    </>
  );
};
const Nav = styled.div`
  height: 70px;
  background-color: black;
  display: flex;
  align-items: center;
  padding: 0px 36px;
  justify-content: space-between;
  overflow-x: hidden;
`;
const Logo = styled.img`
  width: 70px;
  cursor: pointer;
`;

const Menu = styled.div`
  display: flex;
  /* flex: 1;
  margin-left: 70px; */
  align-items: center;
  text-decoration: none;
  a {
    display: flex;
    align-items: center;
    /* background-color:red ; */
    padding: 0px 12px;
    text-decoration: none;
    color: #f9f9f9;
    img {
      height: 20px;
    }
    span {
      font-size: 14.5px;
      letter-spacing: 1px;
      text-transform: uppercase;
      position: relative;

      &::after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0px;
        right: 0px;
        bottom: -5px;
        transform: scaleX(0);
        opacity: 0%;
        transition: all 250ms linear;
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 100%;
      }
    }
  }
`;
const Profile = styled.img`
  width: 50px;
  border: 2px solid #f9f9f9;
  border-radius: 50%;
  padding: 1px 1px;
  cursor: pointer;
`;

export default Header;
