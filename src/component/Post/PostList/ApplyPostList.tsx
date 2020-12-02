import React, { FC, UIEvent, useCallback } from "react";
import { useDispatch } from "react-redux";
import { boardActionCreater } from "../../../module/action/board";
import { PostItem } from "../../../module/reducer/board";
import { LoginedContainer } from "../../../style/GlobalStyle";
import ApplyPostItem from "../PostItem/ApplyPostItem";
import MinePostItem from "../PostItem/MinePostItem";
import * as S from "./styles";

interface Props {
  data: PostItem[];
}

const ApplyPostList: FC<Props> = ({ data }) => {
  const dispatch = useDispatch();
  const onScrollHandler = useCallback((e: UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLLIElement;
    if (target.scrollHeight - target.clientHeight === target.scrollTop) {
      dispatch(boardActionCreater.getBoardApplySaga());
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
            <ApplyPostItem
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

export default ApplyPostList;
