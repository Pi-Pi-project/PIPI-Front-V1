import styled, { createGlobalStyle } from "styled-components";

export const FormLeftDivBasic = styled.div`
  flex: 7;

  img {
    width: 100%;
  }
`;

export const FormRightDivBasic = styled.div`
  background-color: rgb(185, 182, 182, 0.09);
  flex: 3;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  * {
    font-family: "Noto Sans KR";
  }
  min-height: 100vh;
  min-width: 1900px;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.div`
  font-size: 100px;
  color: #61bfad;
  font-weight: bold;
`;

export const SubTitle = styled.div`
  font-size: 30px;
  color: #3b3b3b;
  font-weight: bold;

  transform: translateY(-30px);
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Input = styled.input`
  background: none;
  color: rgb(59, 59, 59, 0.48);
  border: none;
  font-weight: 700;
  letter-spacing: 1px;
  font-size: 25px;
  border-bottom: 1px solid #707070;
  padding-left: 10px;
  box-sizing: border-box;

  &::placeholder {
    color: rgb(59, 59, 59, 0.48);
  }
  & + & {
    margin-top: 20px;
  }
`;

export const SubmitButton = styled.button`
  padding: 15px 30px;
  border-radius: 12px;
  font-weight: bold;
  color: black;
  border: 3px solid #61bfad;
  transition: all 0.15s ease-out;
  background: transparent;

  &:hover {
    background: #61bfad;
    color: white;
  }
`;
