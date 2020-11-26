import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  background-color: rgb(101, 101, 101, 0.52);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 10000000;
`;

export const SuccessBtnWrap = styled.div`
  display: flex;
`;

export const WhiteBackground = styled.div`
  background-color: white;
`;

export const Button = styled.button`
  background-color: #61bfad;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  color: white;
  padding: 3px 15px;
  font-weight: bold;
`;

export const ButtonWrap = styled.div`
  padding: 20px 0;
  text-align: center;
`;

export const ProjectWrap = styled.div`
  width: 800px;
  padding: 30px;
  height: 600px;
  overflow-y: auto;
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
  border: 2px solid transparent;
  transition: 0.5s all;

  &:hover {
    background-color: white;
    color: #61bfad;
    border: 2px solid #61bfad;
  }
`;
export const Red = styled.span`
  color: #fb0d0d;
`;

export const SuccessProjectBtn = styled(OkBtn)`
  transform: translateY(15px);
  width: 130px;

  & + & {
    margin-left: 10px;
  }
`;

export const Input = styled.input`
  font-size: 23px;
  margin-top: 15px;
  font-weight: bold;
  color: rgba(59, 59, 59, 0.48);
  width: 75%;
  border: none;
  border-bottom: 1px solid #707070;
`;

export const SmallText = styled.div`
  font-weight: bold;
  font-size: 12px;
`;

export const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

export const TextArea = styled.textarea`
  border: 1px solid #707070;
  border-top: none;
  font-size: 20px;
  margin-bottom: 10px;
  height: 100px;
  width: 75%;
  font-weight: bold;
  color: rgba(59, 59, 59, 0.48);
  resize: none;

  ${Title} + & {
    margin-top: 50px;
  }
`;
