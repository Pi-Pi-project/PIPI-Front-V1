import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  > div {
    background-color: white;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #3b3b3b;
    padding: 30px 0;
  }
`;
export const BoardMemberGlobalStyle = createGlobalStyle`
    body {
        background-color:#F8F9FC;
    }
`;
