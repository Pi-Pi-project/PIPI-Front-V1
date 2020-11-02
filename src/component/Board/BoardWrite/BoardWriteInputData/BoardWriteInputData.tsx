import React, { ChangeEvent, FC } from "react";
import { useState } from "react";
import { useCallback } from "react";
import * as S from "./styles";

const BoardWriteInputData: FC = () => {
  const [bloblUrl, setBlobUrl] = useState<string>("");

  const fileChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setBlobUrl(URL.createObjectURL(e.target.files[0]));
  }, []);

  return (
    <S.Container>
      <S.BoardData>
        <S.BoardInput placeholder="*프로젝트 명" />
        <S.BoardInput placeholder="*프로젝트 카테고리" />
        <S.BoardInput placeholder="*기술 스택" />
        <S.BoardInput placeholder="*최대 인원 수" />
      </S.BoardData>
      <S.BoardImg>
        <S.Title>*배너 이미지</S.Title>
        <input type="file" id="banner-img" onChange={fileChangeHandler} />
        <label htmlFor="banner-img">
          <S.BannerImg>{bloblUrl && <img src={bloblUrl} />}</S.BannerImg>
        </label>
      </S.BoardImg>
    </S.Container>
  );
};

export default BoardWriteInputData;
