import styled from "styled-components";

export const Tables = styled.table`
  //   width: 100px;
  background-collapse: collapse;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Th = styled.th`
  padding: 10px 20px;
  border: 1px solid white;
  //   background-color: blue;
  text-align: center;
  font-size: 17px;
`;

export const Tr = styled.tr``;

export const Td = styled.td`
  padding: 10px 20px;
  text-align: center;
  border: 1px solid grey;
  color: ${({ clr }) => clr};

  span {
    margin: 0 2px;
    font-size: 20px;
    cursor: pointer;
  }
`;
