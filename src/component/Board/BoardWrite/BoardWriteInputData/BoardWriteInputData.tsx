import React, { ChangeEvent, FC } from "react";
import { useState } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { writeActionCreater } from "../../../../module/action/write";
import { StoreType } from "../../../../module/reducer";
import * as S from "./styles";

const BoardWriteInputData: FC = () => {
  const dispatch = useDispatch();
  const file = useSelector((store: StoreType) => store.write.file);

  const fileChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(writeActionCreater.setBannerImg(e.target.files[0]));
  }, []);

  const changeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(writeActionCreater.inputUpdate({ name, value }));
  }, []);

  return (
    <S.Container>
      <S.BoardData>
        <S.BoardInput
          name="title"
          onChange={changeHandler}
          type="text"
          placeholder="*프로젝트 명"
        />
        <S.BoardInput
          name="category"
          onChange={changeHandler}
          type="text"
          placeholder="*프로젝트 카테고리"
        />
        <S.BoardInput
          name="skills"
          onChange={changeHandler}
          type="text"
          placeholder="*기술 스택"
        />
        <S.BoardInput
          name="max"
          onChange={changeHandler}
          type="number"
          placeholder="*최대 인원 수"
        />
      </S.BoardData>
      <S.BoardImg>
        <S.Title>*배너 이미지</S.Title>
        <input type="file" id="banner-img" onChange={fileChangeHandler} />
        <label htmlFor="banner-img">
          <S.BannerImg>
            {file && <img src={URL.createObjectURL(file)} />}
          </S.BannerImg>
        </label>
      </S.BoardImg>
    </S.Container>
  );
};

export default BoardWriteInputData;
