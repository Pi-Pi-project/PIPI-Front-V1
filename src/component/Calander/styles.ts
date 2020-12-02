import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: white;
`;

export const CalanderLeft = styled.div`
  flex: 7;
  border: 1px solid #dfdfdf;
  border-right: none;
`;

export const TodoRight = styled.div`
  flex: 3;
  border: 1px solid #dfdfdf;
  padding: 5px 20px;
  text-align: center;
`;

export const CalanderLineDiv = styled.div`
  display: flex;
`;

export const CalanderLeftHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 5px 0;
`;

export const ButtonWrap = styled.div`
  font-size: 40px;
  font-weight: bolder;
  cursor: pointer;
`;
export const BigText = styled.div`
  font-size: 40px;
  width: 400px;
  text-align: center;
  font-weight: bolder;
`;
export const DateWrap = styled.div``;

export const CalanderItemActive = styled.div<{ isClicked: boolean }>`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${props =>
    props.isClicked &&
    css`
      border: 1px solid black;
      border-radius: 50%;
      color: white;
      background-color: black;
    `}
`;

export const CalanderItemDiv = styled.div<{
  isActive?: boolean;
}>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 30px;
  height: 85px;
  font-weight: bold;
  border: 1px solid transparent;

  ${props =>
    props.isActive &&
    css`
      opacity: 0.5;
    `}
`;
