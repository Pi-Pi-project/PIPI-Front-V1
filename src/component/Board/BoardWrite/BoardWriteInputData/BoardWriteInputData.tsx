import React, {
  ChangeEvent,
  FC,
  useCallback,
  MouseEvent,
  useMemo,
  ReactElement
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSkillImgSrc } from "../../../../lib/func";
import { writeActionCreater } from "../../../../module/action/write";
import { StoreType } from "../../../../module/reducer";
import { SkillImg } from "../../../Post/PostItem/styles";
import * as S from "./styles";

const BoardWriteInputData: FC = () => {
  const dispatch = useDispatch();
  const { file, category, skills } = useSelector((store: StoreType) => ({
    file: store.write.file,
    category: store.write.category,
    skills: store.write.skills
  }));

  const categoryValue = useMemo<ReactElement>(() => {
    if (!category && !skills.length) {
      return <span>프로젝트 카테고리 & 기술 스택</span>;
    }
    return (
      <>
        <span>{category} </span>
        <div>
          {skills.map(src => (
            <SkillImg src={getSkillImgSrc(src)}></SkillImg>
          ))}
        </div>
      </>
    );
  }, [category, skills]);

  const fileChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(writeActionCreater.setBannerImg(e.target.files[0]));
  }, []);

  const changeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(writeActionCreater.inputUpdate({ name, value }));
  }, []);

  const openModal = useCallback((e: MouseEvent<HTMLInputElement>) => {
    dispatch(writeActionCreater.changeModalState(true));
    dispatch(writeActionCreater.setModalType("CATEGORY"));
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
          name="max"
          onChange={changeHandler}
          type="number"
          placeholder="*최대 인원 수"
        />
        <S.HiddenInput
          name="category"
          onChange={changeHandler}
          type="text"
          placeholder="*프로젝트 카테고리"
        />
        <S.InputButton onClick={openModal}>{categoryValue}</S.InputButton>
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
