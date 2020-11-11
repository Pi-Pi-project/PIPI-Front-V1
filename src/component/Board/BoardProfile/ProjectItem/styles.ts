import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 120px;
  border-radius: 10px;
  border: 1px solid #707070;

  & + & {
    margin-top: 30px;
  }

  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const ProjectName = styled.div`
  font-size: 25px;
  font-weight: bold;

  & + div {
    margin-left: 15px;
  }
`;

export const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const ProjectBody = styled.div`
  flex: 1;
  overflow: hidden;
`;
