import React, { FC, UIEvent, useCallback } from "react";
import { useDispatch } from "react-redux";
import { boardActionCreater } from "../../../module/action/board";
import { PostItem } from "../../../module/reducer/board";
import { LoginedContainer } from "../../../style/GlobalStyle";
import MinePostItem from "../PostItem/MinePostItem";
import * as S from "./styles";

interface Props {
  data: PostItem[];
}

const MinePostList: FC<Props> = ({ data }) => {
  const dispatch = useDispatch();
  const onScrollHandler = useCallback((e: UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLLIElement;
    if (target.scrollHeight - target.clientHeight === target.scrollTop) {
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
            <MinePostItem
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

export default MinePostList;
