import React, { FC } from "react";
import { useSelector } from "react-redux";
import { StoreType } from "../../../module/reducer";
import * as S from "./styles";

const BoardWriteModal: FC = () => {
  const isOpen = useSelector((store: StoreType) => store.write.modalIsOpen);
  return (
    isOpen && (
      <S.Container>
        <S.Modal>
          <S.CategotyItem>Web</S.CategotyItem>
          <S.CategotyItem>App</S.CategotyItem>
          <S.CategotyItem>
            Data
            <br />
            Science
          </S.CategotyItem>
          <S.CategotyItem>System</S.CategotyItem>
          <S.CategotyItem>Network</S.CategotyItem>
          <S.CategotyItem>
            Machine
            <br />
            Learning
          </S.CategotyItem>
          <S.CategotyItem>Security</S.CategotyItem>
          <S.CategotyItem>Embedded</S.CategotyItem>
          <S.CategotyItem>VR</S.CategotyItem>
          <S.CategotyItem>Game</S.CategotyItem>
        </S.Modal>
      </S.Container>
    )
  );
};

export default BoardWriteModal;
