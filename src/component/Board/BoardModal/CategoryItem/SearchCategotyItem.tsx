import React, { FC } from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { boardActionCreater } from "../../../../module/action/board";
import * as S from "../styles";

interface CategoryItem {
  value: string;
}

const SearchCategoryItem: FC<CategoryItem> = ({ value }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const clickHandler = useCallback(() => {
    dispatch(boardActionCreater.changeSearchModal(false));
    history.push(`/board/search/${value}`);
  }, []);
  return <S.CategotyItem onClick={clickHandler}>{value}</S.CategotyItem>;
};

export default SearchCategoryItem;
