import * as B from "../Form/styles";
import styled from "styled-components";

export const LoginHeader = styled(B.Header)`
  height: 250px;
`;
export const LoginBody = styled(B.Body)`
  width: 70%;
  height: 300px;
`;
export const LoginLeftDiv = styled(B.FormLeftDivBasic)``;
export const LoginRightDiv = styled(B.FormRightDivBasic)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ForgotPassword = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  color: rgb(59, 59, 59, 0.48);
  font-weight: bold;
`;
export const LoginFooter = styled(B.Footer)`
  height: 200px;

  > div {
    justify-content: center;
  }
`;
export const LoginInput = styled(B.Input)`
  width: 100%;
`;
export const LoginTitle = styled(B.Title)``;
export const LoginSubTitle = styled(B.SubTitle)``;
export const LoginButton = styled(B.SubmitButton)`
  width: 230px;
`;
