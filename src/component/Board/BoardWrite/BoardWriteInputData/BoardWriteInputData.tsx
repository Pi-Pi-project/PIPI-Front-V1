import React, { ChangeEvent, FC, useCallback, MouseEvent } from "react";
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

  const openModal = useCallback((e: MouseEvent<HTMLInputElement>) => {
    dispatch(writeActionCreater.changeModalState(true));
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
        <S.HiddenInput
          name="category"
          onChange={changeHandler}
          type="text"
          placeholder="*프로젝트 카테고리"
        />
        <S.InputButton onClick={openModal}>
          프로젝트 카테고리 & 기술 스택
        </S.InputButton>
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
