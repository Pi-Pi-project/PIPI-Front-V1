import React, { FC } from "react";
import { useSelector } from "react-redux";
import { CategoryArr } from "../../../lib/static";
import { StoreType } from "../../../module/reducer";
import SearchCategotyItem from "./CategoryItem/SearchCategotyItem";
import * as S from "./styles";

const BoardSearchModal: FC = () => {
  const isOpen = useSelector(
    (store: StoreType) => store.board.boardSearch.modalIsOpen
  );
  return (
    isOpen && (
      <S.Container isSecond={false}>
        <div>
          <div>
            <S.Modal>
              {CategoryArr.map(category => (
                <SearchCategotyItem key={category} value={category} />
              ))}
            </S.Modal>
          </div>
        </div>
      </S.Container>
    )
  );
};

export default BoardSearchModal;
