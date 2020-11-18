import React, { FC, memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { WindowCalanderDate } from "window-calander";
import { managementActionCreater } from "../../../module/action/management";
import * as S from "../styles";

interface Props extends WindowCalanderDate {
  isClicked: boolean;
}

const CalanderItem: FC<Props> = ({
  isClicked,
  date,
  isThisMonth,
  year,
  month
}) => {
  const dispatch = useDispatch();
  const selectDate = useCallback(() => {
    dispatch(managementActionCreater.selectDay({ year, month, date }));
  }, []);
  return (
    <S.CalanderItemDiv onClick={selectDate} isActive={!isThisMonth}>
      <S.CalanderItemActive isClicked={isClicked}>{date}</S.CalanderItemActive>
    </S.CalanderItemDiv>
  );
};

export default memo(CalanderItem);
