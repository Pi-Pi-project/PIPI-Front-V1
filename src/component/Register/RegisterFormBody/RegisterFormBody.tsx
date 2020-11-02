import React, { ChangeEvent, FC, KeyboardEvent, useCallback } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkEnterKeyCode } from "../../../lib/func";
import { SkillData, skillDataArray } from "../../../lib/static";
import { registerActionCreater } from "../../../module/action/register";
import { StoreType } from "../../../module/reducer";
import * as S from "../styles";

const RegisterFormBody: FC = () => {
  const dispatch = useDispatch();
  const {
    step,
    checkCode,
    email,
    password,
    passwordRe,
    nickname,
    github,
    introduce,
    skills,
    skill
  } = useSelector((store: StoreType) => store.register);
  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    dispatch({ type: "register/SET_STEP", payload: "SET_USER_PROFILE" });
  }, []);

  const addSkills = useCallback((skill: SkillData) => {
    dispatch(registerActionCreater.setSkills(skill));
  }, []);

  const changeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(registerActionCreater.updateInput({ name, value }));
  }, []);

  const checkEmail = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (checkEnterKeyCode(e.key))
      dispatch(registerActionCreater.checkEmailSaga());
  }, []);

  const checkCodeKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (checkEnterKeyCode(e.key))
      dispatch(registerActionCreater.checkCodeSaga());
  }, []);

  const reSendCheckCode = useCallback(() => {
    dispatch(registerActionCreater.checkEmailSaga());
  }, []);

  const requestRegisterKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (checkEnterKeyCode(e.key))
        dispatch(registerActionCreater.requestRegisterSaga());
    },
    []
  );

  return (
    <S.RegisterFormBody>
      {step === "CHECK_EMAIL" ? (
        <>
          <S.RegisterP>계정에 사용 할 이메일을 입력해주세요!</S.RegisterP>
          <S.RegisterInput
            onKeyDown={checkEmail}
            name="email"
            value={email}
            placeholder="이메일"
            onChange={changeHandler}
            type="email"
          />
        </>
      ) : step === "CHECK_CODE" ? (
        <>
          <S.RegisterP>
            입력한 이메일로 보내진 인증번호를 입력해주세요.
          </S.RegisterP>
          <S.RegisterInput
            name="email"
            value={email}
            placeholder="이메일"
            onChange={changeHandler}
            type="email"
            onKeyDown={checkCodeKeyDown}
            disabled={true}
          />
          <S.RegisterInput
            name="checkCode"
            onKeyDown={checkCodeKeyDown}
            value={checkCode}
            placeholder="인증번호"
            onChange={changeHandler}
            type="text"
          />
          <S.ReSendEmail>
            <span onClick={reSendCheckCode}>재전송</span>
          </S.ReSendEmail>
        </>
      ) : step === "SET_USER_INFO" ? (
        <>
          <S.RegisterInput
            name="nickname"
            value={nickname}
            placeholder="닉네임"
            onChange={changeHandler}
            type="text"
            onKeyDown={requestRegisterKeyDown}
          />
          <S.RegisterInput
            name="password"
            value={password}
            placeholder="비밀번호"
            onChange={changeHandler}
            type="password"
            onKeyDown={requestRegisterKeyDown}
          />
          <S.RegisterInput
            name="passwordRe"
            value={passwordRe}
            placeholder="비밀번호 재입력"
            onChange={changeHandler}
            type="password"
            onKeyDown={requestRegisterKeyDown}
          />
        </>
      ) : step === "SET_USER_PROFILE" ? (
        <>
          <S.MySkills>
            {skills.map(({ src }) => (
              <S.SkillImg src={src} />
            ))}
          </S.MySkills>
          <S.RegisterSkillWrap>
            <S.RegisterInput
              placeholder="기술스택"
              type="text"
              onChange={changeHandler}
              name="skill"
              value={skill}
              ref={inputRef}
            />
            {skill && (
              <S.SearchSkill>
                {skillDataArray
                  .filter(data => data.searchName.includes(skill))
                  .map(data => (
                    <div
                      key={data.showName}
                      onClick={() => {
                        addSkills(data);
                      }}
                    >
                      {data.showName}
                    </div>
                  ))}
              </S.SearchSkill>
            )}
          </S.RegisterSkillWrap>
          <S.RegisterInput
            placeholder="깃허브 주소"
            type="text"
            onChange={changeHandler}
            value={github}
            name="github"
          />
          <S.RegisterInput
            placeholder="한 줄 소개"
            type="text"
            onChange={changeHandler}
            value={introduce}
            name="introduce"
          />
        </>
      ) : (
        ""
      )}
    </S.RegisterFormBody>
  );
};

export default RegisterFormBody;
