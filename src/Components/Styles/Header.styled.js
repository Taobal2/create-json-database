import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: red;
  position: fixed;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px;
`;

export const NavHolder = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px;
  color: white;

  span {
    margin-top: 5px;
    font-size: 18px;
  }
`;

export const Nav = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  margin-left: 5px;
  cursor: pointer;
  color: white;
`;

export const LogoHolder = styled.div`
  display: flex;
  flex: 1;
`;

export const Logo = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: white;
  margin: 0 20px;
`;
