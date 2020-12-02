import React, { ChangeEvent, FC } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pictureIcon } from "../../../asset";
import {
  registerAction,
  registerActionCreater
} from "../../../module/action/register";
import { StoreType } from "../../../module/reducer";
import * as S from "../styles";

const RegisterFormHeader: FC = () => {
  const dispatch = useDispatch();

  const step = useSelector((store: StoreType) => store.register.step);
  const fileData = useSelector((store: StoreType) => store.register.fileData);

  const setProfileImg = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(registerActionCreater.setProfileImg(e.target.files[0]));
  }, []);

  return (
    <S.RegisterFormHeader>
      {step === "SET_USER_PROFILE" ? (
        <>
          <S.ProfileImgWrap>
            <S.ProfileImg
              src={fileData ? URL.createObjectURL(fileData) : undefined}
            />
            <S.SelectImg>
              <label htmlFor="profileImg">
                <img src={pictureIcon} />
              </label>
              <input onChange={setProfileImg} id="profileImg" type="file" />
            </S.SelectImg>
          </S.ProfileImgWrap>
          <S.RegisterP>
            프로필 사진을 설정하지 않으면, 기본 이미지가 적용됩니다.
          </S.RegisterP>
        </>
      ) : (
        <>
          <S.RegisterTitle>SIGN UP</S.RegisterTitle>
          <S.RegisterSubTitle>Be our member!</S.RegisterSubTitle>
        </>
      )}
    </S.RegisterFormHeader>
  );
};

export default RegisterFormHeader;
