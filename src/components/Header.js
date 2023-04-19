import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="./images/main-logo.png" alt="my logo img" style={{width:'300px',height:'140px'}} className="main-logo"/>
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }

@media (max-width:1200px){
  .main-logo{
    width: 100px !important;
    height: 100px !important;
  }
}

`;
export default Header;
