import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
`;

export const Modal = styled.div`
  width: 1200px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const CategotyItem = styled.div`
  width: 200px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 200px;
  margin: 15px;
  font-size: 30px;
  box-shadow: 5px 5px 20px 1px rgba(0, 0, 0, 0.1);
  font-weight: lighter;
  transition: 0.5s all;

  background-color: #53af9e;
  color: white;
  font-weight: bolder;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid #53af9e;
    background: white;
    color: #53af9e;
    transform: scale(1.2);
  }
`;

export const Title = styled.div`
  font-weight: lighter;
  font-size: 35px;
`;

export const LeftDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
export const RightDiv = styled.div``;
