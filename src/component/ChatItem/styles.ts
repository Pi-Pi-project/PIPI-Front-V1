import styled, { css } from "styled-components";

export const Container = styled.div<{ isMine: boolean }>`
  color: black;

  ${props =>
    props.isMine &&
    css`
      justify-content: flex-end;
    `}
  display: flex;
  margin-top: 3px;
  box-sizing: border-box;
  align-items: flex-end;
`;

export const ProfileWrap = styled.div`
  text-align: center;
`;

export const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const UserName = styled.div<{ isMine: boolean }>`
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  width: 80px;
  text-overflow: ellipsis;
`;

export const Content = styled.div`
  word-break: break-all;
  padding: 10px;
  font-size: 20px;
  border-radius: 10px;
  border: 2px solid black;
`;

export const UserWrap = styled.div`
  max-width: 40%;
`;
