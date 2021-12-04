import React from "react";
import {
  Container,
  Wrapper,
  Navigation,
  NavHolder,
  Nav,
  Logo,
  LogoHolder,
} from "../Styles/Header.styled";
import { MdCreateNewFolder, MdHome } from "react-icons/md";
import { FcViewDetails } from "react-icons/fc";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <LogoHolder>
          <Logo />
        </LogoHolder>

        <Navigation>
          <NavHolder>
            <span>
              <MdHome />
            </span>
            <Nav to="/">Home Page</Nav>
          </NavHolder>

          <NavHolder>
            <span>
              <MdCreateNewFolder />
            </span>
            <Nav to="/create">Create Page</Nav>
          </NavHolder>

          <NavHolder>
            <span>
              <FcViewDetails />
            </span>
            <Nav to="/about">About us</Nav>
          </NavHolder>
        </Navigation>
      </Wrapper>
    </Container>
  );
};

export default Header;
