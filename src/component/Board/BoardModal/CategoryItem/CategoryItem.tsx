import React, { FC } from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { writeActionCreater } from "../../../../module/action/write";
import * as S from "../styles";

interface CategoryItem {
  value: string;
}

const CategoryItem: FC<CategoryItem> = ({ value }) => {
  const dispatch = useDispatch();
  const clickHandler = useCallback(() => {
    dispatch(
      writeActionCreater.inputUpdate({
        name: "category",
        value
      })
    );
    dispatch(writeActionCreater.setModalType("SKILL"));
  }, []);
  return <S.CategotyItem onClick={clickHandler}>{value}</S.CategotyItem>;
};

export default CategoryItem;
