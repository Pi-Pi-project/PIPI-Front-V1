import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  padding-top: 30px;
  max-height: 690px;
  overflow-y: auto;
  ::-webkit-scrollbar {
  }
`;

export const AiRecommend = styled.div`
  margin-bottom: 20px;

  span {
    color: #53af9e;
    font-weight: bold;
    text-align: center;
  }
  > div {
    transition: 1s all;
    opacity: 1;
    border: 3px solid #53af9e;
  }
`;

export const NoneListDiv = styled.div`
  padding-top: 100px;
  text-align: center;
  font-size: 30px;
`;
