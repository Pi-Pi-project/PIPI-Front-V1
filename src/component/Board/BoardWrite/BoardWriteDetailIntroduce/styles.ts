import styled from "styled-components";
import { SubmitButton } from "../../../Form/styles";

export const Container = styled.div`
  position: relative;
`;
export const WriteButton = styled.button`
  position: absolute;
  bottom: 30px;
  right: 30px;
  background-color: #53af9e;
  color: white;
  font-size: 25px;
  font-weight: bold;
  padding: 5px 20px;
  border: none;
  border-radius: 8px;

  &:hover {
    color: black;
    transition: all 0.25s;
  }
`;

export const IntroduceInput = styled.textarea`
  border: 1px solid #707070;
  width: 100%;
  resize: none;
  font-size: 20px;
  font-weight: bold;
  color: #aea7a7;
  margin-top: 40px;
  height: 330px;
  background-color: white;
`;
