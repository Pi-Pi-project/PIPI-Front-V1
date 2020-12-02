import React, { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import WindowCalander, {
  WindowCalander as WindowCalanderType
} from "window-calander";
import { getMonthName } from "../../lib/func";
import { managementActionCreater } from "../../module/action/management";
import { StoreType } from "../../module/reducer";
import ToDoList from "../ToDoList/ToDoList";
import CalanderLine from "./CalanderLine/CalanderLine";
import * as S from "./styles";

const Calander: FC = () => {
  const dispatch = useDispatch();
  const [list, setList] = useState<WindowCalanderType>([]);

  const { month, year, selectDate, todos, id } = useSelector(
    (store: StoreType) => store.management
  );

  useEffect(() => {
    setList(WindowCalander(year, month));
  }, [month, year]);

  useEffect(() => {
    dispatch(managementActionCreater.getTodoSaga());
  }, [selectDate, id]);

  const nextMonth = useCallback(() => {
    dispatch(managementActionCreater.nextMonth());
  }, []);
  const prevMonth = useCallback(() => {
    dispatch(managementActionCreater.prevMonth());
  }, []);

  return (
    <S.Container>
      <S.CalanderLeft>
        <div>
          <S.CalanderLeftHeader>
            <S.ButtonWrap onClick={prevMonth}>&lt;</S.ButtonWrap>
            <S.BigText>
              {getMonthName(month)} {year}
            </S.BigText>
            <S.ButtonWrap onClick={nextMonth}>&gt;</S.ButtonWrap>
          </S.CalanderLeftHeader>
          <S.CalanderLineDiv>
            <S.CalanderItemDiv>S</S.CalanderItemDiv>
            <S.CalanderItemDiv>M</S.CalanderItemDiv>
            <S.CalanderItemDiv>T</S.CalanderItemDiv>
            <S.CalanderItemDiv>W</S.CalanderItemDiv>
            <S.CalanderItemDiv>T</S.CalanderItemDiv>
            <S.CalanderItemDiv>F</S.CalanderItemDiv>
            <S.CalanderItemDiv>S</S.CalanderItemDiv>
          </S.CalanderLineDiv>
        </div>
        {list.map((data, i) => (
          <CalanderLine key={i} selectDate={selectDate} data={data} />
        ))}
      </S.CalanderLeft>
      <S.TodoRight>
        <ToDoList todos={todos} />
      </S.TodoRight>
    </S.Container>
  );
};

export default Calander;
