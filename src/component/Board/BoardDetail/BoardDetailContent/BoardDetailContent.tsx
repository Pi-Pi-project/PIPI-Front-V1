import React, { FC } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_IMG_URL, BASE_URL } from "../../../../lib/api";
import { skillNameToSrc } from "../../../../lib/static";
import { boardActionCreater } from "../../../../module/action/board";
import { modalActionCreater } from "../../../../module/action/modal";
import { StoreType } from "../../../../module/reducer";
import * as S from "../styles";

const BoardDetailContent: FC = () => {
  const dispatch = useDispatch();
  const { img, content, postSkillsets, max, mine, applied } = useSelector(
    (store: StoreType) => store.board.detail
  );

  const applyProject = useCallback(() => {
    if (mine) {
      dispatch(
        modalActionCreater.formModalOn({
          title: "실패했습니다",
          subTitle: "자신의 공고에는 신청 불가능 합니다"
        })
      );
      return;
    }

    if (applied) {
      dispatch(
        modalActionCreater.formModalOn({
          title: "실패했습니다",
          subTitle: "이미 신청중입니다"
        })
      );
      return;
    }
    dispatch(boardActionCreater.applyProjectSaga());
  }, [mine, applied]);

  return (
    <div>
      <S.BannerImg src={`${BASE_IMG_URL}/${img}`} />
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
            <button onClick={applyProject}>참여 신청</button>
          </S.BtnWrap>
        </S.Detail>
      </S.BoardDetailContent>
    </div>
  );
};

export default BoardDetailContent;
