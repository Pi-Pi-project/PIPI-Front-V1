import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  border-bottom: 1px solid rgba(59, 59, 59, 0.33);
  display: flex;
  padding-bottom: 30px;
  margin-top: 30px;
`;

export const UserTextWrap = styled.div`
  margin-left: 10px;
`;

export const UserProfileWrap = styled.div`
  flex: 1;
  display: flex;
`;

export const UsetImgCircle = styled.div<{ src: string }>`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: url(${props => props.src}) no-repeat;
  background-size: cover;
  background-position: center;
`;

export const UserName = styled.div`
  font-size: 30px;
  font-weight: bolder;
`;
export const UserEmail = styled.div`
  font-size: 15px;
  transform: translateY(-8px);
  font-weight: bolder;
`;

export const ButtonBoxWrap = styled.div`
  display: flex;
  align-items: center;
`;
export const Button = styled.button`
  border: 1px solid #53af9e;
  background: transparent;
  border-radius: 5px;
  padding: 5px 20px;
  font-size: 20px;
  font-weight: bold;

  & + & {
    margin-left: 10px;
  }
`;
