import React, { FC, UIEvent } from "react";
import { useCallback } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { boardActionCreater } from "../../../module/action/board";
import { PostItem } from "../../../module/reducer/board";
import { LoginedContainer } from "../../../style/GlobalStyle";
import ViewPostItem from "../PostItem/ViewPostItem";
import * as S from "./styles";

interface Props {
  data: PostItem[];
}

const ViewPostList: FC<Props> = ({ data }) => {
  const dispatch = useDispatch();
  const onScrollHandler = useCallback((e: UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLLIElement;
    if (target.scrollHeight - target.clientHeight === target.scrollTop) {
      dispatch(boardActionCreater.getBoardListSaga());
    }
  }, []);

  return (
    <S.Container onScroll={onScrollHandler}>
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
              key={id}
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
