import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  height: 300px;
  width: 100%;
  display: flex;

  margin: 30px 0;
`;

export const PreviewImg = styled.div<{ src: string }>`
  background: url(${props => props.src}) no-repeat;
  background-position: center;
  background-size: cover;
  width: 420px;
`;

export const ProjectIntroduce = styled.div`
  flex: 1;
  background-color: #f8f9fc;
  box-sizing: border-box;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
`;

export const UserImg = styled.div<{ src: string }>`
  background: url(${props => props.src}) no-repeat;
  background-position: center;
  background-size: cover;
  width: 44px;
  height: 44px;
  border-radius: 14px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
`;
export const BottmWrap = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

export const Button = styled.button`
  background-color: #53af9e;
  color: white;
  font-weight: bolder;
  font-size: 25px;
  border: 1px solid transparent;
  transition: 0.25s all;
  padding: 3px 20px;

  & + & {
    margin-left: 20px;
  }

  &:hover {
    color: #53af9e;
    background: white;
    border: 1px solid #53af9e;
  }
`;

export const SkillImg = styled.div<{ src: string }>`
  background: url(${props => props.src}) no-repeat;
  background-position: center;
  background-size: cover;
  & + & {
    margin-left: 10px;
  }
  width: 50px;
  height: 50px;
`;

export const UserName = styled.div`
  font-size: 25px;
  color: #3b3b3b;
  margin-left: 15px;
`;

export const ProjectManager = styled.div`
  height: 60px;
  display: flex;
  box-sizing: border-box;
`;

export const Introduce = styled.div`
  h3 {
    margin-top: 20px;
    margin-bottom: 3px;
    font-size: 20px;
    font-weight: bold;
    color: #3b3b3b;
  }
  p {
    margin: 0;
  }
`;

export const ProjectName = styled(Link)`
  font-size: 30px;
  text-decoration: none;
  font-weight: bold;
  color: #3b3b3b;
`;

export const SkillSets = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const SKillImg = styled.div``;
