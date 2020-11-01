import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgb(101, 101, 101, 0.52);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Modal = styled.div`
  width: 30%;
  height: 35%;
  text-align: center;
  border: 1px solid #61bfad;
  border-radius: 30px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #3b3b3b;
  background-color: white;
  min-width: 400px;
`;

export const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const OkBtn = styled.button`
  background-color: #61bfad;
  color: white;
  font-weight: bold;
  font-size: 30px;
  transform: translateY(50px);
  border-radius: 20px;
  width: 35%;
  padding: 5px 10px;
  border: none;
`;
