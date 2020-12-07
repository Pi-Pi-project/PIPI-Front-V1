import React, { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { logOut } from "../../../lib/api";
import { getImgSrc, getSkillImgSrc } from "../../../lib/func";
import { modalActionCreater } from "../../../module/action/modal";
import { profileActionCreater } from "../../../module/action/profile";
import { StoreType } from "../../../module/reducer";
import { LoginedContainer } from "../../../style/GlobalStyle";
import PortfolioModal from "../../Modal/portfolioModal";
import ProjectItem from "./ProjectItem/ProjectItem";
import * as S from "./styles";

const BoardProfile: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onPasswordChangeModal = useCallback(() => {}, []);

  const {
    firstPortfolio,
    giturl,
    introduce,
    skills,
    secondPortfolio,
    profileImg,
    nickname,
    userEmail,
    email
  } = useSelector((store: StoreType) => ({
    ...store.profile,
    email: store.profile.userEmail,
    userEmail: store.navigation.email
  }));

  const onProfileEdit = useCallback(() => {
    if (email !== userEmail) return;
    dispatch(profileActionCreater.editProfileSaga());
    history.push("/register");
  }, [email, userEmail]);

  const logOutFunc = useCallback(() => {
    logOut();
  }, []);

  const onPortfolioModal = useCallback(() => {
    if (email !== userEmail) return;
    dispatch(modalActionCreater.portfolioEditModalOn());
  }, [email, userEmail]);
  return (
    <LoginedContainer>
      <S.Container>
        <S.BoardProfileGlobalStyle />
        <S.BigProfileImg src={getImgSrc(profileImg)} />
        <S.UserNickname>{nickname}</S.UserNickname>
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
              onClick={onPortfolioModal}
              giturl={firstPortfolio.giturl}
              id={firstPortfolio.id}
              introduce={firstPortfolio.introduce}
              title={firstPortfolio.title}
              userEmail={firstPortfolio.userEmail}
            />
          ) : (
            <ProjectItem
              onClick={onPortfolioModal}
              giturl={""}
              id={0}
              introduce={""}
              title={"프로젝트가 없어요ㅠㅠ"}
              userEmail={""}
            />
          )}
          {secondPortfolio ? (
            <ProjectItem
              onClick={onPortfolioModal}
              giturl={secondPortfolio.giturl}
              id={secondPortfolio.id}
              introduce={secondPortfolio.introduce}
              title={secondPortfolio.title}
              userEmail={secondPortfolio.userEmail}
            />
          ) : (
            <ProjectItem
              onClick={onPortfolioModal}
              giturl={""}
              id={0}
              introduce={""}
              title={"프로젝트가 없어요ㅠㅠ"}
              userEmail={""}
            />
          )}
        </S.ProjectWrap>
        <S.FuncWrap>
          <S.FuncText onClick={onProfileEdit}>프로필 수정</S.FuncText>
          <S.Bar>|</S.Bar>
          <S.FuncText onClick={logOutFunc}>로그아웃</S.FuncText>
        </S.FuncWrap>
      </S.Container>
      <PortfolioModal />
    </LoginedContainer>
  );
};

export default BoardProfile;
