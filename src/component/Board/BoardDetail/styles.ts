import styled, { createGlobalStyle } from "styled-components";

export const BoardDetailGlobalStyle = createGlobalStyle`
    body {
        background-color:#F8F9FC;
    }
`;

export const BoardDetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const ProjectName = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #3b3b3b;
`;

export const ProfileWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImg = styled.div<{ src: string }>`
  width: 70px;
  height: 70px;
  background: url(${props => props.src}) no-repeat;
  background-size: cover;
  border: 1px solid #707070;
  background-position: center;
`;

export const ProfileName = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-left: 10px;
  color: #3b3b3b;
`;
