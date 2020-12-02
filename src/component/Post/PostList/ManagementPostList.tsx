import React, { FC, UIEvent } from "react";
import { useDispatch } from "react-redux";
import { ProjectItem } from "../../../module/reducer/board";
import { LoginedContainer } from "../../../style/GlobalStyle";
import ManagementPostItem from "../PostItem/ManagementPostItem";
import * as S from "./styles";

interface Props {
  data: ProjectItem[];
}

const ManagementPostList: FC<Props> = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <S.Container>
      <LoginedContainer>
        {data.map(({ id, idea, img, title }) => (
          <ManagementPostItem
            id={id}
            idea={idea}
            img={img}
            title={title}
            key={id}
          />
        ))}
      </LoginedContainer>
    </S.Container>
  );
};

export default ManagementPostList;
