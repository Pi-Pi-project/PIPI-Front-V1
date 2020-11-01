import styled from "styled-components";

export const Container = styled.header`
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-bottom: 1px solid rgba(112, 112, 112, 0.5);

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export const ImgCircle = styled.div<{ src: string }>`
  width: 71px;
  height: 71px;
  background: url(${props => props.src}) no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
`;

export const LogoText = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: #3b3b3b;
  margin-left: 20px;
`;
