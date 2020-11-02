import React, { FC } from "react";
import { PostItem } from "../../../module/reducer/board";
import { LoginedContainer } from "../../../style/GlobalStyle";
import ViewPostItem from "../PostItem/ViewPostItem";
import * as S from "./styles";

interface Props {
  data: PostItem[];
}

const ViewPostList: FC<Props> = ({ data }) => {
  return (
    <S.Container>
      <LoginedContainer>
        {data.map(
          ({
            category,
            userNickname,
            id,
            title,
            createdAt,
            idea,
            img,
            postSkillsets,
            userEmail,
            userImg
          }) => (
            <ViewPostItem
              category={category}
              userNickname={userNickname}
              id={id}
              title={title}
              createdAt={createdAt}
              idea={idea}
              img={img}
              postSkillsets={postSkillsets}
              userEmail={userEmail}
              userImg={userImg}
            />
          )
        )}
      </LoginedContainer>
    </S.Container>
  );
};

export default ViewPostList;
