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

export const BoardDetailContent = styled.div`
  height: 450px;
  margin-top: 30px;
  display: flex;
  border: 1px solid #707070;
`;

export const Max = styled.div`
  text-align: center;
  color: #3b3b3b;
  font-weight: bold;
  font-size: 20px;
`;

export const Content = styled.div`
  flex: 8;
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  color: #aea7a7;
  white-space: pre;
`;

export const SkillWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  img {
    margin: 10px;
    width: 50px;
    height: 50px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    padding: 3px 25px;
    border-radius: 5px;
    background-color: #53af9e;
    border: none;
    font-size: 25px;
    font-weight: bold;
    color: white;
    margin-bottom: 15px;
    transition: 0.25s all;

    &:hover {
      color: black;
    }
  }
`;

export const Detail = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

export const BannerImg = styled.div<{ src: string }>`
  height: 250px;
  background: url(${props => props.src}) no-repeat;
  background-position: center;
  margin-top: 15px;
  background-size: contain;
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
