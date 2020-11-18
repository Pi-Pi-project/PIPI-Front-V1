import React, { FC } from "react";
import { WindowCalanderDate, WindowCalanderLine } from "window-calander";
import CalanderItem from "../CalanderItem/CalanderItem";
import * as S from "../styles";

interface Props {
  data: WindowCalanderLine;
  selectDate: {
    year: number;
    month: number;
    date: number;
  };
}

const CalanderLine: FC<Props> = ({ data, selectDate }) => {
  return (
    <S.CalanderLineDiv>
      {data.map(({ date, day, isThisMonth, month, year }) => (
        <CalanderItem
          key={`${year}-${month}-${date}`}
          isClicked={
            date === selectDate.date &&
            year === selectDate.year &&
            month === selectDate.month
          }
          date={date}
          isThisMonth={isThisMonth}
          month={month}
          year={year}
          day={day}
        />
      ))}
    </S.CalanderLineDiv>
  );
};

export default CalanderLine;
