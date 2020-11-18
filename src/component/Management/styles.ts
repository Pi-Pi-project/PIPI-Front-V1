import styled, { createGlobalStyle } from "styled-components";

export const ManagementGlobalStyle = createGlobalStyle`
    body {
        background-color:#F8F9FC;
    }
`;

export const Container = styled.div`
  margin-top: 100px;
  color: #3b3b3b;
`;

export const ManagementHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ManagementBody = styled.div`
  display: flex;
  margin-top: 10px;
  height: 700px;
`;

export const ProjectName = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

export const ProjectButton = styled.button`
  padding: 5px 15px;
  background-color: #53af9e;
  border: 1px solid transparent;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  transition: 0.25s all;

  &:hover {
    color: #53af9e;
    background-color: white;
    border: 1px solid #53af9e;
  }
`;
