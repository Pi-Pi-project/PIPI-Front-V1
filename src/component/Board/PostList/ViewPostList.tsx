import React, { FC } from "react";
import { LoginedContainer } from "../../../style/GlobalStyle";
import ViewPostItem from "../PostItem/ViewPostItem";
import * as S from "./styles";

const ViewPostList: FC = () => {
  return (
    <S.Container>
      <LoginedContainer>
        <ViewPostItem />
        <ViewPostItem />
        <ViewPostItem />
      </LoginedContainer>
    </S.Container>
  );
};

export default ViewPostList;
