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
  padding: 0 15px;
  display: flex;
  flex-direction: column;
`;

export const ProjectManager = styled.div`
  height: 60px;
  background-color: red;
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

export const ProjectName = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #3b3b3b;
`;

export const SkillSets = styled.div`
  flex: 1;
  background-color: blue;
`;
