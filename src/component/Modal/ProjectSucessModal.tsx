import React, { FC, useCallback, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { managementActionCreater } from "../../module/action/management";
import { modalActionCreater } from "../../module/action/modal";
import { StoreType } from "../../module/reducer";
import * as S from "./styles";

const ProjectSuccessModal: FC = () => {
  const { isOpen, giturl, introduce } = useSelector(
    (store: StoreType) => store.modal.projectSuccessModal
  );
  const dispatch = useDispatch();

  const changeInput = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      dispatch(
        modalActionCreater.projectSuccessModalChangeInput({ name, value })
      );
    },
    []
  );

  const closeModal = useCallback(() => {
    dispatch(modalActionCreater.projectSuccessModalOff());
  }, []);

  const successProejct = useCallback(() => {
    dispatch(managementActionCreater.successProjectSaga());
  }, []);
  return (
    isOpen && (
      <S.Container>
        <S.Modal>
          <S.Title>프로젝트를 완료하셨나요?</S.Title>
          <S.SubTitle>
            프로젝트가 정말 완료되었는지 <S.Red>팀원</S.Red>들과
            <S.Red>상의</S.Red>해주세요.
          </S.SubTitle>
          <S.SmallText>
            프로젝트 완료 신청 후, 승인이 될 때까지 기다려주세요. 완료가
            승인되면 프로필 속 프로젝트 목록에 추가되어집니다.
          </S.SmallText>
          <S.Input
            name="giturl"
            onChange={changeInput}
            value={giturl}
            placeholder="*깃허브 주소"
          />
          <S.TextArea
            name="introduce"
            onChange={changeInput}
            value={introduce}
            placeholder="프로젝트 설명"
          ></S.TextArea>
          <S.SuccessBtnWrap>
            <S.SuccessProjectBtn onClick={successProejct}>
              확인
            </S.SuccessProjectBtn>
            <S.SuccessProjectBtn onClick={closeModal}>취소</S.SuccessProjectBtn>
          </S.SuccessBtnWrap>
        </S.Modal>
      </S.Container>
    )
  );
};

export default ProjectSuccessModal;
