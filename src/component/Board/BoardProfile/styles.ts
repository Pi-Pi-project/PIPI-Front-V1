import styled, { createGlobalStyle } from "styled-components";

export const BoardProfileGlobalStyle = createGlobalStyle`
    body {
        background-color:#F8F9FC;
    }
`;

export const BigProfileImg = styled.img`
  width: 169px;
  border-radius: 50%;
  height: 169px;
  margin-top: 20px;
  border: 1px solid #707070;
`;

export const UserNickname = styled.div`
  font-size: 35px;
  margin-top: 10px;
  font-weight: bold;
`;

export const Container = styled.div`
  display: flex;
  background-color: white;
  color: #3b3b3b;
  padding: 30px 0;
  flex-direction: column;
  align-items: center;
`;

export const SkillItem = styled.img`
  width: 50px;
  height: 50px;

  & + & {
    margin-left: 30px;
  }
`;

export const IntroduceWrap = styled.div`
  margin-top: 20px;
`;

export const IntroduceLine = styled.div`
  font-size: 25px;
  font-weight: bold;
  position: relative;

  ::before {
    position: absolute;
    content: "";
    border-radius: 50%;
    width: 12px;
    left: -8px;
    top: 50%;

    transform: translate(-10px, -50%);
    height: 12px;
    background: black;
  }
`;

export const SkillSetWrap = styled.div`
  width: 200px;
  display: flex;
  margin-top: 20px;
  justify-content: center;
`;

export const ProjectWrap = styled.div`
  margin-top: 30px;
  width: 750px;
`;

export const FuncWrap = styled.div`
  margin-top: 80px;
  color: #61bfad;
`;

export const Bar = styled.span`
  margin: 0 15px;
`;

export const FuncText = styled.span`
  font-size: 15px;
  cursor: pointer;
  font-weight: bold;
`;
