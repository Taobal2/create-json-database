import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
width: 30%;
height: 100%;
padding: 10px; 20px;
display: flex;
flex-direction: column;
`;

export const Content = styled.form`
  display: flex;
  flex-direction: column;
  margin: 5px 0;
`;

export const Label = styled.form`
  font-weight: bold;
  margin-bottom: 3px;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 5px;
  background-color: #
  border:0;
  outline:none;
  border: 1px solid grey;
  padding-left: 6px;
`;

export const Button = styled.button`
  width: 50%;
  height: 40px;
  border-radius: 5px;
  border: 0;
  font-size: 18px;
  color: white;
  background-color: red;
  margin: 30px auto;
  cursor: pointer;
`;
