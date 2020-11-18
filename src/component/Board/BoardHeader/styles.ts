import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled.div`
  background-color: #f8f9fc;
  border-bottom: 1px solid #aea7a7;
  height: 130px;
  display: flex;
  align-items: center;

  > div {
    height: 50px;
    display: flex;
    justify-content: space-between;
  }
`;

export const HrefButton = styled(Link)<{ isActive?: boolean }>`
  border: 1px solid #aea7a7;
  border-radius: 5px;
  font-weight: bold;
  padding: 5px 10px;
  margin: 0 5px;
  width: 160px;
  display: inline-block;
  text-align: center;
  box-sizing: border-box;
  text-decoration: none;
  font-size: 25px;

  color: #3b3b3b;
  background-color: #ffffff;

  &:first-child {
    margin-left: 0;
  }

  ${props =>
    props.isActive &&
    css`
      background-color: #53af9e;
      color: white;
    `}
`;

export const InputWrap = styled.div`
  background-color: white;
  border: 1px solid #aea7a7;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;

  > input {
    font-size: 20px;
    padding-left: 10px;
    border: none;
    flex: 1;
  }
`;
