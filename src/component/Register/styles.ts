import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import * as B from "../Form/styles";

export const RegisterRight = styled(B.FormRightDivBasic)``;
export const RegisterFormHeader = styled(B.Header)`
  height: 300px;
`;
export const RegisterTitle = styled(B.Title)``;
export const RegisterSubTitle = styled(B.SubTitle)``;
export const RegisterFormBody = styled(B.Body)`
  height: 300px;
`;
export const RegisterFormFooter = styled(B.Footer)`
  height: 200px;
`;
export const RegisterP = styled(B.P)`
  margin-bottom: 40px;
`;
export const MySkills = styled.div`
  width: 100%;
  background-color: white;
  margin-bottom: 30px;
  min-height: 100px;
  border-radius: 14px;
  box-shadow: 0px 5px 10px 1px rgb(0, 0, 0, 0.1);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const SkillImg = styled.div<{ src: string }>`
  width: 43px;
  height: 43px;
  margin: 5px;
  border-radius: 50%;
  background: url(${props => props.src}) no-repeat;
  background-size: cover;
  background-position: center;
`;

export const RegisterSkillWrap = styled.div`
  margin-bottom: 20px;
  position: relative;
`;
export const RegisterInput = styled(B.Input)``;
export const RegisterSubmitBtn = styled(B.SubmitButton)`
  width: 230px;
`;
export const ReSendEmail = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  color: rgb(59, 59, 59, 0.48);
  font-weight: bold;

  > span {
    cursor: pointer;
  }
`;

export const SearchSkill = styled.div`
  position: absolute;
  background-color: white;
  width: 100%;
  font-size: 20px;
  color: black;
  border-radius: 10px;
  height: 70px;
  box-shadow: 0px 5px 10px 1px rgb(0, 0, 0, 0.1);
  text-align: center;
  overflow-y: auto;
`;

export const ProfileImgWrap = styled.div`
  position: relative;
`;

export const SelectImg = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #707070;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    display: none;
  }
`;

export const ProfileImg = styled.div<{ src?: string }>`
  background: url(${props => props.src}) no-repeat;
  background-size: cover;
  background-position: center;
  width: 200px;
  border-radius: 50%;
  height: 200px;

  ${props =>
    !props.src &&
    css`
      background-color: rgb(112, 112, 112, 0.7);
    `}
`;
