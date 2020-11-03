import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
`;

export const BoardData = styled.div`
  flex: 4.5;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  flex-direction: column;
`;

export const BoardImg = styled.div`
  flex: 5.5;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  input {
    display: none;
  }
  label {
    width: 100%;
    flex: 1;
  }
`;

export const Title = styled.div`
  font-size: 30px;
  margin-bottom: 18px;
  font-weight: bold;
  color: #aea7a7;
`;

export const BannerImg = styled.div`
  border: 1px solid #707070;
  height: 100%;
  max-height: 240px;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  img {
    height: 100%;
  }
`;

export const BoardInput = styled.input`
  border: none;
  border-bottom: 1px solid #3b3b3b;
  width: 90%;
  font-size: 25px;
  margin-top: 25px;
  font-weight: bold;
  padding-bottom: 5px;
  padding-left: 5px;
  color: #aea7a7;
  background-color: transparent;

  ::placeholder {
    color: #aea7a7;
    font-size: 25px;
    font-weight: bold;
  }
`;
