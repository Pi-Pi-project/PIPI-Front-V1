import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f8f9fc;
  display: flex;
  flex-direction: column;
`;

export const AdminHeader = styled.div`
  background-color: #ffffff;
  border: 1px solid #707070;
  padding: 20px;

  > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ProjectName = styled.span<{ color: string }>`
  font-size: 40px;
  font-weight: bold;
  color: ${props => props.color};
`;

export const Button = styled.button`
  border: 3px solid #61bfad;
  color: black;
  font-size: 25px;
  border-radius: 20px;
  padding: 3px 10px;
  background: none;
  font-weight: bold;
`;

export const Main = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
`;

export const ListWrap = styled.div`
  border: 1px solid #707070;
  background-color: #ffffff;
  margin-top: 20px;
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

export const Half = styled.div`
  flex: 1;
  padding: 30px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
`;
export const Title = styled.div`
  font-size: 35px;
  font-weight: bold;
  text-align: center;
`;
