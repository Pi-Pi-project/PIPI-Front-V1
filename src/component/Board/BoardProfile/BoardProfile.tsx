import React, { FC } from "react";
import { useSelector } from "react-redux";
import { getImgSrc, getSkillImgSrc } from "../../../lib/func";
import { StoreType } from "../../../module/reducer";
import { LoginedContainer } from "../../../style/GlobalStyle";
import ProjectItem from "./ProjectItem/ProjectItem";
import * as S from "./styles";

const BoardProfile: FC = () => {
  const {
    firstPortfolio,
    giturl,
    introduce,
    skills,
    secondPortfolio,
    profileImg,
    nickname
  } = useSelector((store: StoreType) => store.profile);
  return (
    <LoginedContainer>
      <S.Container>
        <S.BoardProfileGlobalStyle />
        <S.BigProfileImg src={getImgSrc(profileImg)} />
        <S.UserNickname>{name}</S.UserNickname>
        <S.SkillSetWrap>
          {skills.map(({ skill }) => (
            <S.SkillItem src={getSkillImgSrc(skill)} />
          ))}
        </S.SkillSetWrap>
        <S.IntroduceWrap>
          <S.IntroduceLine>
            GitHub: {giturl || "주소가 없습니다"}
          </S.IntroduceLine>
          <S.IntroduceLine>
            한 줄 소개: {introduce || "설명이 없습니다"}
          </S.IntroduceLine>
        </S.IntroduceWrap>
        <S.ProjectWrap>
          {firstPortfolio ? (
            <ProjectItem
              giturl={firstPortfolio.giturl}
              id={firstPortfolio.id}
              introduce={firstPortfolio.introduce}
              title={firstPortfolio.title}
              userEmail={firstPortfolio.userEmail}
            />
          ) : (
            <ProjectItem
              giturl={""}
              id={0}
              introduce={""}
              title={"프로젝트가 없어요ㅠㅠ"}
              userEmail={""}
            />
          )}
          {secondPortfolio ? (
            <ProjectItem
              giturl={secondPortfolio.giturl}
              id={secondPortfolio.id}
              introduce={secondPortfolio.introduce}
              title={secondPortfolio.title}
              userEmail={secondPortfolio.userEmail}
            />
          ) : (
            <ProjectItem
              giturl={""}
              id={0}
              introduce={""}
              title={"프로젝트가 없어요ㅠㅠ"}
              userEmail={""}
            />
          )}
        </S.ProjectWrap>
      </S.Container>
    </LoginedContainer>
  );
};

export default BoardProfile;
