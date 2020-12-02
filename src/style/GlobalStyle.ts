import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin:0;
        padding:0;
    }
    * {
      font-family:Noto Sans KR !important;
    }
`;

export const GlobalContainer = styled.div`
  min-height: 100vh;
  min-width: 1900px;
`;

export const LoginedContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
`;
