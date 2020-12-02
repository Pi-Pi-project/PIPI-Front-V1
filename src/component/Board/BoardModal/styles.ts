import styled, { css } from "styled-components";
import { SubmitButton } from "../../Form/styles";

export const Container = styled.div<{ isSecond: boolean }>`
  width: 100vw;
  height: 100vh !important;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  > div {
    transition: 1s transform;
    height: 100vh;
    width: 100%;

    ${props =>
      props.isSecond &&
      css`
        transform: translateY(-100%);
      `}

    > div {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const Modal = styled.div`
  width: 1200px;
  height: 450px;
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

export const MySkills = styled.div`
  width: 100%;
  max-width: 396px;
  overflow-y: auto;
  background-color: white;
  min-height: 100px;
  border-radius: 14px;
  box-shadow: 0px 5px 10px 1px rgb(0, 0, 0, 0.1);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const SearchMySkills = styled(MySkills)`
  border-radius: 0;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  min-height: 100px;
  max-width: unset;
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

export const Input = styled.input`
  background: white;
  color: rgb(59, 59, 59, 0.48);
  border: none;
  font-weight: 700;
  letter-spacing: 1px;
  font-size: 25px;
  border-bottom: 1px solid #707070;
  padding-left: 10px;
  box-sizing: border-box;
  width: 396px;
  transform: translatey(-10px);
  &::placeholder {
    color: rgb(59, 59, 59, 0.48);
  }
`;

export const SearchSkillLine = styled.div`
  font-size: 20px;
  text-align: center;
`;

export const SearchInput = styled(Input)`
  transform: translateY(0);
  outline: none;
  width: 100%;
  border: none;
  border-top: 1px solid #707070;
`;

export const SearchBox = styled.div`
  display: flex;
  width: 600px;
  flex-direction: column;
`;

export const SkillWrap = styled.div`
  position: relative;
`;

export const SearchSkillWrp = styled(SkillWrap)`
  height: 190px;
  background-color: white;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;

  &::-webkit-scrollbar {
    display: none;
  }

  & > div:nth-child(1) {
    height: 100px;
    overflow-y: auto;
  }
`;

export const ButtonWrap = styled.div`
  text-align: center;
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

export const Button = styled(SubmitButton)`
  width: 160px;
  font-size: 20px;
  font-weight: bolder;
  color: #61bfad;
  margin: 10px;

  &:hover {
    background: #61bfad;
    color: white;
    border: 3px solid #61bfad;
  }
`;
