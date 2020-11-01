import React, { FC } from "react";
import * as S from "./styles";

const ViewPostItem: FC = () => {
  return (
    <S.Container>
      <S.PreviewImg src="https://lh3.googleusercontent.com/-RpMuCuTVZlg/W7n4Jc25ivI/AAAAAAAFA7o/U6ypccwJIQ0echiRN_7kui0z2x89n6UygCHMYCw/s0/637711a230201f85f3c17f5621e5489d940ae389.png" />
      <S.ProjectIntroduce>
        <S.ProjectName>프로젝트A</S.ProjectName>
        <S.ProjectManager>d</S.ProjectManager>
        <S.Introduce>
          <h3>한줄소개</h3>
          <p>
            이러쿵 저러쿵 디자인하기 싫다 인공지능 개발은 언제하지 스프린트 하면
            얼마나 갈릴려나 엉엉엉 허리 아파요 그래도 할 수 있겠지 히히 발싸
          </p>
        </S.Introduce>
        <S.SkillSets></S.SkillSets>
      </S.ProjectIntroduce>
    </S.Container>
  );
};

export default ViewPostItem;
