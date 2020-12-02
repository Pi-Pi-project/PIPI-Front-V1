import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  background-color: #f8f9fc;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginWrap = styled.div`
  width: 700px;
  height: 500px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid #707070;
  display: flex;
  flex-direction: column;

  > div {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:nth-child(3) {
      flex: 1;
    }
  }
`;

export const InputWrap = styled.div`
  flex: 1;
  justify-content: space-between !important;
`;

export const Input = styled.input`
  padding-left: 5px;
  color: rgba(59, 59, 59, 0.48);
  font-size: 30px;
  font-weight: bold;
  border: none;
  background: none;
  border-bottom: 1px solid #707070;
`;

export const BigTitle = styled.div`
  font-size: 75px;
  font-weight: bolder;
  color: #53af9e;
`;

export const Title = styled.div`
  color: #3b3b3b;
  transform: translateY(-30px);
  font-size: 45px;
  font-weight: bold;
`;

export const Button = styled.button`
  border: 3px solid #61bfad;
  color: black;
  font-size: 30px;
  font-weight: bold;
  width: 270px;
  background: none;
  border-radius: 20px;
  padding: 10px;
  transition: 0.25s all;

  &:hover {
    color: black;
    background: #61bfad;
    border: 3px solid white;
  }
`;
