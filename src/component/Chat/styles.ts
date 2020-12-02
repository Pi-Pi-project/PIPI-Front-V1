import styled, { createGlobalStyle } from "styled-components";
import { LoginedContainer } from "../../style/GlobalStyle";
import { SubmitButton } from "../Form/styles";

export const ChatGlobalStyle = createGlobalStyle`
    body {
        background-color:#F8F9FC;
    }
`;

export const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 3px solid #707070;
  padding-bottom: 20px;
`;

export const ProfileImg = styled.img`
  width: 71px;
  height: 71px;
  border-radius: 50%;
`;

export const Container = styled.div`
  ${LoginedContainer} {
    margin-top: 70px;
    padding: 20px;
    box-sizing: border-box;
    background-color: white;
    color: #707070;
  }
`;

export const UserName = styled.span`
  font-size: 30px;
  margin-left: 20px;
  font-weight: bold;
`;

export const ChatBody = styled.div``;

export const ButtonWrap = styled.div`
  border-top: 3px solid #707070;
  display: flex;
  padding-top: 20px;
  text-align: right;
`;

export const ChatContent = styled.div`
  height: 580px;
  padding: 10px 0;
  box-sizing: border-box;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Button = styled(SubmitButton)`
  background: #61bfad;
  color: white;
  border: 3px solid transparent;
  font-size: 20px;
  padding: 7 2px;
  border-radius: 7px;

  &:hover {
    border: 3px solid #61bfad;
    background: white;
    color: #61bfad;
  }
`;

export const Input = styled.input`
  flex: 1;
  border: 2px solid #61bfad;
  border-radius: 13px;
  font-size: 20px;
  margin-right: 30px;
`;
