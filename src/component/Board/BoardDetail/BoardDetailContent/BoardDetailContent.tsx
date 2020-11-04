import React, { FC } from "react";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../../../lib/api";
import { skillNameToSrc } from "../../../../lib/static";
import { StoreType } from "../../../../module/reducer";
import * as S from "../styles";

const BoardDetailContent: FC = () => {
  const { img, content, postSkillsets, max } = useSelector(
    (store: StoreType) => store.board.detail
  );
  return (
    <div>
      <S.BannerImg src={`${BASE_URL}/image/${img}/`} />
      <S.BoardDetailContent>
        <S.Content>{content}</S.Content>
        <S.Detail>
          <div>
            <S.SkillWrap>
              {postSkillsets.map(({ skill }) => (
                <img src={skillNameToSrc[skill]} />
              ))}
            </S.SkillWrap>
            <S.Max>최대 인원 수 : {max}명</S.Max>
          </div>
          <S.BtnWrap>
            <button>참여 신청</button>
          </S.BtnWrap>
        </S.Detail>
      </S.BoardDetailContent>
    </div>
  );
};

export default BoardDetailContent;
