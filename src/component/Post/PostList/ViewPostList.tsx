import Axios from "axios";
import React, { FC, UIEvent, useEffect, useState } from "react";
import { useCallback } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { boardActionCreater } from "../../../module/action/board";
import { StoreType } from "../../../module/reducer";
import { PostItem } from "../../../module/reducer/board";
import { LoginedContainer } from "../../../style/GlobalStyle";
import CategoryItem from "../../Board/BoardModal/CategoryItem/CategoryItem";
import ViewPostItem from "../PostItem/ViewPostItem";
import * as S from "./styles";

interface Props {
  data: PostItem[];
}

const ViewPostList: FC<Props> = ({ data }) => {
  const dispatch = useDispatch();
  const [aiRecommend, setAiRecommend] = useState<PostItem>(null);
  const email = useSelector((store: StoreType) => store.navigation.email);
  const onScrollHandler = useCallback((e: UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLLIElement;
    if (target.scrollHeight - target.clientHeight === target.scrollTop) {
      dispatch(boardActionCreater.getBoardListSaga());
    }
  }, []);

  useEffect(() => {
    if (!email) return;
    Axios.post("http://172.20.10.2:5000/output", {
      email
    }).then(res => {
      setAiRecommend(res.data);
    });
  }, [email]);

  return (
    <S.Container onScroll={onScrollHandler}>
      <LoginedContainer>
        {aiRecommend && (
          <S.AiRecommend>
            <span>인공지능의 추천!</span>
            {<ViewPostItem {...aiRecommend} />}
          </S.AiRecommend>
        )}

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
