import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin:0;
        padding:0;
    }
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

    * {
      font-family:Noto Sans KR;
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
