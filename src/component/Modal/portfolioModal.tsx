import React, { FC, MouseEvent, useState } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActionCreater } from "../../module/action/modal";
import { profileActionCreater } from "../../module/action/profile";
import { StoreType } from "../../module/reducer";
import ProjectItem from "../Board/BoardProfile/ProjectItem/ProjectItem";
import * as S from "./styles";

const PortfolioModal: FC = () => {
  const [selectId, setSelectid] = useState<number[]>([]);
  const dispatch = useDispatch();
  const { isOpen, portfolios, email } = useSelector((store: StoreType) => ({
    isOpen: store.modal.portfoioModal.isOpen,
    portfolios: store.profile.portfolios,
    email: store.navigation.email
  }));

  const closeModal = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      dispatch(modalActionCreater.portfolioEditModalOff());
      setSelectid([]);
    }
  }, []);

  const selectProject = useCallback((id: number) => {
    setSelectid(prev => {
      if (prev.includes(id)) return prev;
      if (prev.length === 2) return [prev[1], id];
      return prev.concat(id);
    });
  }, []);

  const selectPortfolio = useCallback(() => {
    dispatch(profileActionCreater.selectPortfolioSaga({ email, selectId }));
  }, [selectId]);

  return (
    isOpen && (
      <S.Container onClick={closeModal}>
        <S.WhiteBackground>
          <S.ProjectWrap>
            {portfolios.map(({ giturl, id, introduce, title, userEmail }) => (
              <ProjectItem
                giturl={giturl}
                id={id}
                onClick={() => {
                  selectProject(id);
                }}
                introduce={introduce}
                title={title}
                userEmail={userEmail}
                active={selectId[0] === id || selectId[1] === id}
              />
            ))}
          </S.ProjectWrap>
          <S.ButtonWrap>
            <S.Button onClick={selectPortfolio}>저장</S.Button>
          </S.ButtonWrap>
        </S.WhiteBackground>
      </S.Container>
    )
  );
};

export default PortfolioModal;
